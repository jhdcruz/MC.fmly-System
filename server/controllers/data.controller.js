/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const rollbar = require('../middlewares/rollbar');
const logger = require('../middlewares/logdna');

// * Models
const Products = mongoose.model('products');
const Transactions = mongoose.model('transactions');
const Users = mongoose.model('users');
const Suppliers = mongoose.model('suppliers');

// * GET | Export all data
exports.exportAll = async (req, res) => {
  try {
    logger.log(`All data exported at ${req.ip}`);
    return await res
      .download(`/products`, `mcfmly-products-${Date.now()}}.json`)
      .download(`/suppliers`, `mcfmly-suppliers-${Date.now()}}.json`)
      .download(`/users`, `mcfmly-users-${Date.now()}}.json`)
      .download(`/transactions`, `mcfmly-transactions-${Date.now()}}.json`)
      .sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    rollbar.error(err);
    logger.error('Data export error', {
      indexMeta: true,
      meta: { err }
    });
  }
};

// * POST | Export route data
exports.exportData = async (req, res) => {
  const { data } = req.params.data;
  try {
    logger.log(`Data exported at ${req.ip}`);
    return (
      res
        // Currently supports JSON-only
        .download(`/${data}`, `mcfmly-${data}-${Date.now()}}.json`)
        .sendStatus(200)
    );
  } catch (err) {
    res.sendStatus(500);
    rollbar.error(err);
    logger.error('Data export error', {
      indexMeta: true,
      meta: { err }
    });
  }
};

// * PUT | Import/Append Data
exports.importProducts = async (req, res) => {
  try {
    logger.log(`Data imported at ${req.ip}`);
    const products = await Products.create(req.body);
    return res.status(201).send(products);
  } catch (err) {
    res.sendStatus(500);
    rollbar.error(err);
    logger.error('Error importing of products', {
      indexMeta: true,
      meta: { err }
    });
  }
};

exports.importSuppliers = async (req, res) => {
  try {
    logger.log(`Data imported at ${req.ip}`);
    const suppliers = await Suppliers.create(req.body);
    return res.status(201).send(suppliers);
  } catch (err) {
    res.sendStatus(500);
    rollbar.error(err);
    logger.error('Error importing of suppliers', {
      indexMeta: true,
      meta: { err }
    });
  }
};

exports.importUsers = async (req, res) => {
  try {
    logger.log(`Data imported at ${req.ip}`);
    const users = await Users.create(req.body);
    return res.status(201).send(users);
  } catch (err) {
    res.sendStatus(500);
    rollbar.error(err);
    logger.error('Error importing of users', {
      indexMeta: true,
      meta: { err }
    });
  }
};

exports.importTransactions = async (req, res) => {
  try {
    logger.log(`Data imported at ${req.ip}`);
    const transactions = await Transactions.create(req.body);
    return res.status(201).send(transactions);
  } catch (err) {
    res.sendStatus(500);
    rollbar.error(err);
    logger.error('Error importing of transactions', {
      indexMeta: true,
      meta: { err }
    });
  }
};
