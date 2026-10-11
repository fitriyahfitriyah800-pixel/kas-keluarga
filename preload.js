const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("DesktopBridge", {
  saveFile: (filename, content) => ipcRenderer.invoke("save-file", filename, content)
});
