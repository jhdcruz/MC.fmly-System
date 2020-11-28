/*
 *     MC.fmly Inventory Management System
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
const rollbar = require('../middlewares/rollbar');
const logger = require('../middlewares/logdna');

const Transactions = mongoose.model('transactions');

// * GET | All Transactions
exports.get = async (req, res) => {
  try {
    logger.log(`GET | Transactions data request`);
    const transactions = await Transactions.find();
    return res.status(200).send(transactions);
  } catch (err) {
    console.error(err);
    rollbar.error(err);
    logger.error(`Error fetching transactions list: ${err}`);
    res.status(500).send('Error fetching transactions');
  }
};

// * GET | Find transactions by buyer's name
exports.findByName = async (req, res) => {
  const { name } = req.query;
  try {
    const transactions = await Transactions.findOne(name, req.body);
    return res.status(200).send(transactions);
  } catch (err) {
    console.error(err);
    rollbar.error(err);
    res.status(500).send(`Cannot find transaction ${name}`);
  }
};

// * GET | Find transaction by order ID
exports.findById = async (req, res) => {
  const { id } = req.query;
  try {
    const transactions = await Transactions.findOne(id, req.body);
    return res.status(200).send(transactions);
  } catch (err) {
    console.error(err);
    rollbar.error(err);
    res.status(500).send(`Cannot find transaction that supplies: ${type}`);
  }
};

// * POST | New Transactions
exports.post = async (req, res) => {
  try {
    const transactions = await Transactions.create(req.body);
    logger.log(`POST | New transaction registered: ${req.body}`);
    return res.status(201).send(transactions);
  } catch (err) {
    console.error(err);
    rollbar.error(err);
    logger.error(`Error registering transaction: ${err}`);
    res.status(500).send('Error posting of transactions');
  }
};

// * PATCH | Overwrite a transaction
exports.patch = async (req, res) => {
  const { id } = req.query;
  try {
    const transactions = await Transactions.findByIdAndUpdate(id, req.body);
    logger.log(`Transaction data updated with id: ${id}`);
    return res.status(202).send(transactions);
  } catch (err) {
    console.error(err);
    rollbar.error(err);
    logger.error(`Error updating transaction: ${err}`);
    res.status(500).send(`Error updating transaction ${id}`);
  }
};

// * DELETE | Delete a transaction
exports.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const transactions = await Transactions.findByIdAndDelete(id);
    logger.log(`Transaction deleted with id: ${id}`);
    return res.status(202).send(transactions);
  } catch (err) {
    console.error(err);
    rollbar.error(err);
    logger.error(`Error deleting transaction: ${err}`);
    res.status(500).send(`Error deleting transaction ${id}`);
  }
};
