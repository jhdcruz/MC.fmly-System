/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const rollbar = require('../middlewares/rollbar');
const logger = require('../middlewares/logdna');

const Transactions = mongoose.model('transactions');

// * GET | All Transactions
exports.get = async (req, res) => {
  try {
    const transactions = await Transactions.find();
    return res.status(200).send(transactions);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error fetching transactions list', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send('Error fetching transactions');
  }
};

// * GET | Filter transaction by payment
exports.findByPayment = async (req, res) => {
  const payment = req.params.payment;
  try {
    const transactions = await Transactions.find({ payment: payment });
    return res.status(200).send(transactions);
  } catch (err) {
    rollbar.error(err);
    logger.error(`Error fetching ${payment} transactions`, {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Cannot find ${payment} transactions.`);
  }
};

// * GET | Filter transaction by status
exports.findByStatus = async (req, res) => {
  const status = req.params.status;
  try {
    const transactions = await Transactions.find({ status: status });
    return res.status(200).send(transactions);
  } catch (err) {
    rollbar.error(err);
    logger.error(`Error fetching ${status} transactions`, {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Cannot find ${status} transactions`);
  }
};

// * GET | Filter transactions by buyer's name
exports.findByName = async (req, res) => {
  const name = req.params.name;
  try {
    const transactions = await Transactions.find({
      name: {
        $regex: name,
        $options: 'i'
      }
    });
    return res.status(200).send(transactions);
  } catch (err) {
    rollbar.error(err);
    logger.error(`Error fetching buyer ${name}`, {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Cannot find buyer ${name}`);
  }
};

// * GET | Find transaction by order ID
exports.findByOrderId = async (req, res) => {
  const order_id = req.params.order_id;
  try {
    const transactions = await Transactions.find({
      order_id: {
        $regex: order_id,
        $options: 'i'
      }
    });
    return res.status(200).send(transactions);
  } catch (err) {
    rollbar.error(err);
    logger.error(`Error fetching transaction #${order_id}`, {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Cannot find transaction #${order_id}.`);
  }
};

// * POST | New Transactions
exports.post = async (req, res) => {
  try {
    const transactions = await Transactions.create(req.body);
    logger.log(`POST | New transaction registered: ${req.body}`);
    return res.status(201).send(transactions);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error registering transaction', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send('Error posting of transactions');
  }
};

// * PATCH | Update a transaction
exports.patch = async (req, res) => {
  const { id } = req.query;
  try {
    const transactions = await Transactions.findByIdAndUpdate(id, req.body);
    logger.log(`Transaction data updated with id: ${id}`);
    return res.status(202).send(transactions);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error updating transaction', {
      indexMeta: true,
      meta: { err }
    });
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
    rollbar.error(err);
    logger.error('Error deleting transaction', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error deleting transaction ${id}`);
  }
};
