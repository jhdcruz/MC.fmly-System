/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const DataController = require('../controllers/data.controller');

module.exports = (api) => {
  api.get('/export', DataController.exportAll);
  api.get('/export/:data', DataController.exportData);
  api.put('/import/products', DataController.importProducts);
  api.put('/import/suppliers', DataController.importSuppliers);
  api.put('/import/transactions', DataController.importTransactions);
  api.put('/import/users', DataController.importUsers);
};
