/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const EmployeeController = require('../controllers/employee');

module.exports = (api) => {
  api.get('/employees', EmployeeController.get);
  api.get('/employees/:name', EmployeeController.getNames);
  api.get('/employees/position/:position', EmployeeController.getRoles);
  api.get('/employees/u/:username', EmployeeController.findByUserName);
  api.post('/employees/', EmployeeController.register);
  api.put('/employees/:id', EmployeeController.put);
  api.delete('/employees/:id', EmployeeController.delete);
};
