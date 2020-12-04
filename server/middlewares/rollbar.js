const Rollbar = require('rollbar');

// * Rollbar config
const rollbar = new Rollbar({
  accessToken: `${process.env.ROLLBAR_ID}`,
  captureUncaught: true,
  captureUnhandledRejections: true
});

module.exports = rollbar;
