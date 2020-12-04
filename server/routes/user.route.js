/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

const UserController = require('../controllers/user.controller');

module.exports = (api) => {
  api.get('/users', UserController.get);
  api.get('/users/:name', UserController.findByName);
  api.get('/users/:role', UserController.findByRole);
  api.put('/users/:id', UserController.patch);
  api.delete('/users/:id', UserController.delete);
};
