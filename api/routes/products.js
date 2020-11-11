/*
 *     MC.fmly Inventory System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

const mongoose = require('mongoose');

const Products = mongoose.model('products');

module.exports = (api) => {
  api.get('/api/products', async (req, res) => {
    const products = await Products.find();
    return res.status(200).send(products);
  });

  api.post('/api/products', async (req, res) => {
    const products = await Products.create(req.body);
    return res.status(201).send({
      error: false,
      products
    });
  });

  api.put('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const products = await Products.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
      error: false,
      products
    });
  });

  api.delete('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    const products = await Products.findByIdAndDelete(id);
    return res.status(202).send({
      error: false,
      products
    });
  });
};
