/*
 *     MC Inventory Management System
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

const Product = mongoose.model('products');

module.exports = (api) => {
  api.get('/api/product', async (req, res) => {
    const products = await Product.find();
    return res.status(200).send(products);
  });

  api.post('/api/product', async (req, res) => {
    const product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    });
  });

  api.put('/api/product/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    });
  });

  api.delete('/api/product/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    });
  });
};
