const { app, BrowserWindow, Menu, dialog, ipcMain, shell } = require("electron");
const fs = require("fs");
const path = require("path");

let win;

function createWindow() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    width: 1120,
    height: 820,
    minWidth: 380,
    minHeight: 560,
    title: "Buku Kas Keluarga",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//.test(url)) shell.openExternal(url);
    return { action: "deny" };
  });
}

ipcMain.handle("save-file", async (_event, filename, content) => {
  const safeName = path.basename(String(filename || "catatan.txt"));
  const ext = path.extname(safeName).slice(1) || "txt";
  const result = await dialog.showSaveDialog(win, {
    title: "Simpan file",
    defaultPath: path.join(app.getPath("downloads"), safeName),
    filters: [{ name: ext.toUpperCase(), extensions: [ext] }]
  });
  if (result.canceled || !result.filePath) return null;
  fs.writeFileSync(result.filePath, String(content), "utf8");
  return result.filePath;
});

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });
  app.whenReady().then(createWindow);
  app.on("window-all-closed", () => app.quit());
}
