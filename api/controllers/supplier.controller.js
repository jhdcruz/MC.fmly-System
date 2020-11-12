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

exports.get = async (req, res) => {
  try {
    const suppliers = await Suppliers.find();
    return res.status(200).send(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching suppliers');
  }
};

exports.post = async (req, res) => {
  try {
    const suppliers = await Suppliers.create(req.body);
    return res.status(201).send(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error posting of suppliers');
  }
};

exports.put = async (req, res) => {
  const { id } = req.params;
  try {
    const suppliers = await Suppliers.findByIdAndUpdate(id, req.body);
    return res.status(202).send(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating supplier ${id}`);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const suppliers = await Suppliers.findByIdAndDelete(id);
    return res.status(202).send(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error deleting supplier ${id}`);
  }
};
