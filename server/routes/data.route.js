/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const DataController = require('../controllers/data.controller');

module.exports = (api) => {
  api.get('/export', DataController.exportData);
  api.post('/import/products', DataController.importProducts);
  api.post('/import/suppliers', DataController.importSuppliers);
  api.post('/import/transactions', DataController.importTransactions);
  api.post('/import/users', DataController.importUsers);
};
