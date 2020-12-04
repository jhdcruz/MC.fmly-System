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
