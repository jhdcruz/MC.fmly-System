/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
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
    logger.error(`Products fetch error: ${err}`);
    res.status(500).send('Error fetching products');
  }
};

// * GET | Product by name
exports.findByName = async (req, res) => {
  const { name } = req.query;
  try {
    const products = await Products.findOne(name, req.body);
    return res.status(200).send(products);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find product ${name}`);
  }
};

// * GET | Product by code
exports.findByCode = async (req, res) => {
  const { code } = req.query;
  try {
    const products = await Products.findOne(code, req.body);
    return res.status(200).send(products);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find product ${code}`);
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
    logger.error(`POST | Product register error: ${err}`);
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
    logger.error(`Error updating product: ${err}`);
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
    logger.error(`Error deleting product: ${err}`);
    res.status(500).send(`Error deleting product ${id}`);
  }
};
