/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const TransactionController = require('../controllers/transaction.controller');

module.exports = (api) => {
  api.get('/transactions', TransactionController.get);
  api.get('/transactions/:name', TransactionController.findByName);
  api.get('/transactions/:id', TransactionController.findById);
  api.post('/transactions', TransactionController.post);
  api.put('/transactions/:id', TransactionController.patch);
  api.delete('/transactions/:id', TransactionController.delete);
};
