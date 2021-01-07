/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const AuthController = require('../controllers/auth.controller');

module.exports = (api) => {
  api.get('/api/status', AuthController.status);
  api.post('/auth/login', AuthController.login);
};
