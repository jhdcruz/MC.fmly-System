/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

window.addEventListener('DOMContentLoaded', () => {
  if (process.platform !== 'darwin') {
    const customTitlebar = require('custom-electron-titlebar');
    new customTitlebar.Titlebar({
      backgroundColor: customTitlebar.Color.fromHex('#222126'),
      icon: 'favicon.ico',
      titleHorizontalAlignment: 'left',
      menu: null
    });
  }
});
