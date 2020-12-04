/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

const AuthController = require('../controllers/auth.controller');

module.exports = (api) => {
  api.get('/auth/status', AuthController.status);
  api.post('/auth/login', AuthController.login);
  api.post('/auth/register', AuthController.register);
};
