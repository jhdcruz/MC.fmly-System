/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const ProductController = require('../controllers/product.controller');

module.exports = (api) => {
  api.get('/products', ProductController.get);
  api.get('/products/:name', ProductController.findByName);
  api.get('/products/:code', ProductController.findByCode);
  api.post('/products', ProductController.post);
  api.put('/products/:id', ProductController.patch);
  api.delete('/products/:id', ProductController.delete);
};
