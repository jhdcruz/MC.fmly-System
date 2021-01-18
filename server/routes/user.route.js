/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const UserController = require('../controllers/employee/user.controller');

module.exports = (api) => {
  api.get('/users', UserController.get);
  api.get('/users/:name', UserController.getNames);
  api.get('/users/roles/:role', UserController.getRoles);
  api.get('/users/u/:username', UserController.findByUserName);
  api.post('/users/', UserController.register);
  api.patch('/users/:id', UserController.patch);
  api.delete('/users/:id', UserController.delete);
};
