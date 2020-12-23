/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const SupplierController = require('../controllers/supplier.controller');

module.exports = (api) => {
  api.get('/suppliers', SupplierController.get);
  api.get('/suppliers/:name', SupplierController.findByName);
  api.get('/suppliers/type/:type', SupplierController.findByType);
  api.post('/suppliers', SupplierController.post);
  api.put('/suppliers/:id', SupplierController.patch);
  api.delete('/suppliers/:id', SupplierController.delete);
};
