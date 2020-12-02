/*
 *     MC.fmly Inventory Management System
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

const { app, autoUpdater, dialog } = require('electron');
const isDev = require('electron-is-dev');

if (!isDev) {
  const upstream = 'https://github.com/jhdcruz/MC.fmly-System/releases';
  const url = `${upstream}/download/${app.getVersion()}`;

  autoUpdater.setFeedURL({ url });

  // * Check for updates every 5 minutes (ms)
  setInterval(() => {
    autoUpdater.checkForUpdates();
  }, 300000);
}

// * Triggers when a new update is available
autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'System Update',
    message: process.platform === 'win32' ? releaseNotes : releaseName,
    detail:
      'A new version is available. Restart the system to apply the updates.'
  };

  dialog.showMessageBox(dialogOpts).then((returnValue) => {
    if (returnValue.response === 0) autoUpdater.quitAndInstall();
  });
});

// * Triggers on update errors
autoUpdater.on('error', (message) => {
  console.error('There was a problem updating the application');
  console.error(message);
});
