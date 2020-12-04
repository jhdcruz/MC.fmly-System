const { Notifier } = require('@airbrake/node');

const airbrake = new Notifier({
  projectId: `${process.env.AIRBRAKE_ID}`,
  projectKey: `${process.env.AIRBRAKE_KEY}`,
  environment: 'production'
});

module.exports = airbrake;
