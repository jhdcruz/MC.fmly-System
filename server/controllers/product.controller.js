/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const rollbar = require('../middlewares/rollbar');
const logger = require('../middlewares/logdna');

const Products = mongoose.model('products');

// * GET | All Product
exports.get = async (req, res) => {
  try {
    logger.log('GET | Product data request');
    const products = await Products.find();
    return res.status(200).send(products);
  } catch (err) {
    rollbar.error(err);
    logger.error('Products fetch error', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send('Error fetching products');
  }
};

// * GET | Filter Products by category
exports.findByCategory = async (req, res) => {
  const category = req.params.category;
  try {
    const products = await Products.find({ category: category });
    return res.status(200).send(products);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find '${category}' products`);
  }
};

// * GET | Filter Products by type
exports.findByType = async (req, res) => {
  const type = req.params.type;
  try {
    const products = await Products.find({ type: type });
    return res.status(200).send(products);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find '${type}' products`);
  }
};

// * GET | Filter Product by name
exports.findByName = async (req, res) => {
  const name = req.params.name;
  try {
    const products = await Products.find({ name: name });
    return res.status(200).send(products);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find product '${name}`);
  }
};

// * GET | Product by code
exports.findByCode = async (req, res) => {
  const code = req.params.code;
  try {
    const products = await Products.findOne({ code: code });
    return res.status(200).send(products);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find product ${req.query}`);
  }
};

// * POST | New Product/s
exports.post = async (req, res) => {
  try {
    const products = await Products.create(req.body);
    logger.log(`New product registered: ${products}`);
    return res.status(201).send(products);
  } catch (err) {
    rollbar.error(err);
    logger.error('POST | Product register error', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error posting product: ${err}`);
  }
};

// * PATCH | Update a product
exports.patch = async (req, res) => {
  const { id } = req.query;
  try {
    const products = await Products.findByIdAndUpdate(id, req.body);
    logger.log(`Succesfully updated product: ${id}`);
    return res.status(202).send(products);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error updating product', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error updating product ${id}`);
  }
};

// * DELETE | Product by id
exports.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const products = await Products.findByIdAndDelete(id);
    logger.log(`Product deleted: ${id}`);
    return res.status(202).send(products);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error deleting product', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error deleting product ${id}`);
  }
};
