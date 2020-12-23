/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const TransactionController = require('../controllers/transaction.controller');

module.exports = (api) => {
  api.get('/transactions', TransactionController.get);
  api.get(
    '/transactions/payment/:payment',
    TransactionController.findByPayment
  );
  api.get('/transactions/:status', TransactionController.findByStatus);
  api.get('/transactions/buyer/:name', TransactionController.findByName);
  api.get('/transactions/order/:order_id', TransactionController.findByOrderId);
  api.post('/transactions', TransactionController.post);
  api.put('/transactions/:id', TransactionController.patch);
  api.delete('/transactions/:id', TransactionController.delete);
};
