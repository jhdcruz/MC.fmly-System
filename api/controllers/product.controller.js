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

const Products = mongoose.model('products');

const options = {
  app: 'MC.fmly Inventory System'
};

const logger = logdna.createLogger(`${process.env.LOGDNA_INGENSTION}`, options);

// * GET | All Product
exports.get = async (req, res) => {
  try {
    const products = await Products.find();
    return res.status(200).send(products);
  } catch (err) {
    logger.error(
      `Someone encountered an error fetching the product list. [${err}]`
    );
    console.error(err);
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
    console.error(err);
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
    console.error(err);
    res.status(500).send(`Cannot find product ${code}`);
  }
};

// * POST | New Product/s
exports.post = async (req, res) => {
  try {
    const products = await Products.create(req.body);
    logger.info(`New product entered ${req.body}`);
    return res.status(201).send(products);
  } catch (err) {
    logger.info(`Someone encountered an error posting new product [${err}]`);
    console.error(err);
    res.status(500).send(`Error posting product: ${err}`);
  }
};

// * PUT | Overwrite a product
exports.put = async (req, res) => {
  const { id } = req.query;
  try {
    const products = await Products.findByIdAndUpdate(id, req.body);
    return res.status(202).send(products);
  } catch (err) {
    console.error(err);
    logger.info(`Someone encoutered a problem updating product: ${id}`);
    res.status(500).send(`Error updating product ${id}`);
  }
};

// * DELETE | Product by id
exports.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const products = await Products.findByIdAndDelete(id);
    logger.info(`Someone deleted a product with id: ${id}`);
    return res.status(202).send(products);
  } catch (err) {
    console.error(err);
    logger.info(`Someone encoutered a problem deleting product: ${id}`);
    res.status(500).send(`Error deleting product ${id}`);
  }
};
