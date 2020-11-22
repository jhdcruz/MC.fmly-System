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
const logdna = require('@logdna/logger');

const Suppliers = mongoose.model('suppliers');

const options = {
  app: 'MC.fmly Inventory System'
};

const logger = logdna.createLogger(`${process.env.LOGDNA_INGENSTION}`, options);

// * GET | All Suppliers
exports.get = async (req, res) => {
  try {
    const suppliers = await Suppliers.find();
    return res.status(200).send(suppliers);
  } catch (err) {
    console.error(err);
    logger.error(`Someone encoutered a problem fetching product: ${err}`);
    res.status(500).send('Error fetching suppliers');
  }
};

// * GET | Find supplier by name
exports.findByName = async (req, res) => {
  const { name } = req.query;
  try {
    const suppliers = await Suppliers.findOne(name, req.body);
    return res.status(200).send(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Cannot find supplier ${name}`);
  }
};

// * GET | Find supplier by type
exports.findByType = async (req, res) => {
  const { type } = req.query;
  try {
    const suppliers = await Suppliers.findOne(type, req.body);
    return res.status(200).send(suppliers);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Cannot find supplier that supplies: ${type}`);
  }
};

// * POST | New Suppliers
exports.post = async (req, res) => {
  try {
    const suppliers = await Suppliers.create(req.body);
    logger.info(`New supplier has been posted: ${req.body}`);
    return res.status(201).send(suppliers);
  } catch (err) {
    console.error(err);
    logger.error(`Someone encoutered a problem posting new supplier: ${err}`);
    res.status(500).send('Error posting of suppliers');
  }
};

// * PUT | Overwrite a supplier
exports.put = async (req, res) => {
  const { id } = req.query;
  try {
    const suppliers = await Suppliers.findByIdAndUpdate(id, req.body);
    logger.info(`Someone updated a supplier with id: ${req.id}`);
    return res.status(202).send(suppliers);
  } catch (err) {
    console.error(err);
    logger.error(`Someone encoutered a updating supplier: ${err}`);
    res.status(500).send(`Error updating supplier ${id}`);
  }
};

// * DELETE | Delete a supplier
exports.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const suppliers = await Suppliers.findByIdAndDelete(id);
    logger.info(`Someone deleted supplier: ${id}`);
    return res.status(202).send(suppliers);
  } catch (err) {
    console.error(err);
    logger.error(`Someone encoutered a problem deleting supplier: ${id}`);
    res.status(500).send(`Error deleting supplier ${id}`);
  }
};
