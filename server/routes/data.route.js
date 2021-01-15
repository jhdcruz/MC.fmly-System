/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const DataController = require('../controllers/data.controller');

module.exports = (api) => {
  api.get('/export', DataController.exportData);
  api.post('/import/login', DataController.importProducts);
  api.post('/import/login', DataController.importSuppliers);
  api.post('/import/login', DataController.importTransactions);
  api.post('/import/login', DataController.importUsers);
};
