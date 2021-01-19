/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// * Datadog Monitoring Integration
const ddOptions = {
  response_code: true,
  tags: ['app:MC-IMS-API']
};

const ddConnect = require('connect-datadog')(ddOptions);

module.exports = ddConnect;
