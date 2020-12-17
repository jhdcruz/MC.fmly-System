/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const Rollbar = require('rollbar');

// * Rollbar config
const rollbar = new Rollbar({
  accessToken: `${process.env.ROLLBAR_ID}`,
  captureUncaught: true,
  captureUnhandledRejections: true
});

module.exports = rollbar;
