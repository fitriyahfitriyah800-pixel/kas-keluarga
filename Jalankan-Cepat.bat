@echo off
rem Membuka Buku Kas Keluarga sebagai jendela aplikasi (tanpa bilah alamat), memakai Microsoft Edge atau Chrome.
set "APP=%~dp0quick\index.html"
set "URL=file:///%APP:\=/%"
set "EDGE1=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
set "EDGE2=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
set "CHROME1=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
set "CHROME2=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if exist "%EDGE1%" start "" "%EDGE1%" --app="%URL%" & exit /b
if exist "%EDGE2%" start "" "%EDGE2%" --app="%URL%" & exit /b
if exist "%CHROME1%" start "" "%CHROME1%" --app="%URL%" & exit /b
if exist "%CHROME2%" start "" "%CHROME2%" --app="%URL%" & exit /b
start "" "%APP%"
