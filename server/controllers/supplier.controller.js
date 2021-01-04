/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const rollbar = require('../middlewares/rollbar');
const logger = require('../middlewares/logdna');

const Suppliers = mongoose.model('suppliers');

// * GET | All Suppliers
exports.get = async (req, res) => {
  try {
    const suppliers = await Suppliers.find();
    return res.status(200).send(suppliers);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error fetching suppliers list', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send('Error fetching suppliers');
  }
};

// * GET | Find supplier by name
exports.findByName = async (req, res) => {
  const name = req.params.name;
  try {
    const suppliers = await Suppliers.find({
      name: {
        $regex: name,
        $options: 'i'
      }
    });
    return res.status(200).send(suppliers);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find supplier ${name}`);
  }
};

// * GET | Filter supplier by type
exports.findByType = async (req, res) => {
  const type = req.params.type;
  try {
    const suppliers = await Suppliers.find({ type: type });
    return res.status(200).send(suppliers);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find supplier that supplies: ${type}`);
  }
};

// * POST | New Suppliers
exports.post = async (req, res) => {
  try {
    const suppliers = await Suppliers.create(req.body);
    logger.log(`POST | New supplier registered: ${req.body}`);
    return res.status(201).send(suppliers);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error registering supplier', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error posting of suppliers: ${err}`);
  }
};

// * PATCH | Update a supplier
exports.patch = async (req, res) => {
  const { id } = req.query;
  try {
    const suppliers = await Suppliers.findByIdAndUpdate(id, req.body);
    logger.log(`Supplier data updated with id: ${id}`);
    return res.status(202).send(suppliers);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error updating supplier', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error updating supplier ${id}`);
  }
};

// * DELETE | Delete a supplier
exports.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const suppliers = await Suppliers.findByIdAndDelete(id);
    logger.log(`Supplier deleted with id: ${id}`);
    return res.status(202).send(suppliers);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error deleting supplier', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error deleting supplier ${id}`);
  }
};
