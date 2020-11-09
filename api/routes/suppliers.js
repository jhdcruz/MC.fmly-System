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

const Suppliers = mongoose.model('suppliers');

module.exports = (api) => {
  api.get('/api/suppliers', async (req, res) => {
    const suppliers = await Suppliers.find();
    return res.status(200).send(suppliers);
  });

  api.post('/api/suppliers', async (req, res) => {
    const suppliers = await Suppliers.create(req.body);
    return res.status(201).send({
      error: false,
      suppliers
    });
  });

  api.put('/api/suppliers/:id', async (req, res) => {
    const { id } = req.params;

    const suppliers = await Suppliers.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      suppliers
    });
  });

  api.delete('/api/suppliers/:id', async (req, res) => {
    const { id } = req.params;

    const suppliers = await Suppliers.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      suppliers
    });
  });
};
