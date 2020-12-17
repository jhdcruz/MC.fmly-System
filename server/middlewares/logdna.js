/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const { createLogger } = require('@logdna/logger');

const options = {
  app: 'MC-IMS-API'
};

const logdna = createLogger(`${process.env.INGESTION_KEY}`, options);

module.exports = logdna;
