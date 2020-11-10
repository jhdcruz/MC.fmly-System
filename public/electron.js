/*
 *     MC.fmly Inventory System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

const singleInstance = app.requestSingleInstanceLock();

function createWindow() {
  // Splashscreen
  const splash = new BrowserWindow({
    width: 310,
    height: 310,
    transparent: true,
    frame: false,
    alwaysOnTop: true
  });
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1220,
    height: 680,
    show: false,
    minWidth: 1100,
    minHeight: 630,
    icon: 'favicon.ico',
    backgroundColor: '#232323',
    autoHideMenuBar: true,
    frame: process.platform === 'darwin',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webviewTag: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  splash.loadURL(`file://${__dirname}/splash.html`).catch((err) => {
    console.error(err);
  });

  // Resorted to web app due to database connection failure
  win
    .loadURL(isDev ? 'http://localhost:3000' : 'https://mc-fmly.vercel.app')
    .catch((err) => {
      console.error(err);
    });

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  win.once('ready-to-show', () => {
    splash.destroy();
    win.show();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app
  .whenReady()
  .then(createWindow)
  .catch((err) => {
    console.error(err);
  });

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  } else {
    app.quit();
  }
});

// Persist single instance lock
if (!singleInstance) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (BrowserWindow) {
      if (!BrowserWindow.isVisible()) BrowserWindow.show();
      BrowserWindow.focus();
    }
  });
}
