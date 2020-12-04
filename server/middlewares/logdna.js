const { createLogger } = require('@logdna/logger');

const options = {
  app: 'MC-IMS-API',
  level: 'info'
};

const logdna = createLogger(`${process.env.INGESTION_KEY}`, options);

module.exports = logdna;
