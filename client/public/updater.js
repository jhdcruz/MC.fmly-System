/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
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
