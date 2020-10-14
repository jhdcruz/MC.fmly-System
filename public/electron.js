/*
 *     MC Inventory Management System
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

const { app, BrowserWindow, crashReporter } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const Sentry = require('@sentry/electron');

require('dotenv').config();
require('@treverix/remote/main').initialize();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

crashReporter.start({
  productName: 'mcfmly',
  companyName: 'deuz',
  ignoreSystemCrashHandler: true,
  uploadToServer: true,
  compress: true,
  submitURL: process.env.SENTRY_CRASHDUMP,
});

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1125,
    height: 650,
    minWidth: 1050,
    minHeight: 600,
    frame: process.platform === 'darwin',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

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
  }
});
