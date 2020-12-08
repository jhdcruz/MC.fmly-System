/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const argon2 = require('argon2');
const rollbar = require('../middlewares/rollbar');
const logger = require('../middlewares/logdna');

const Users = mongoose.model('users');

// * GET | All users
exports.get = async (req, res) => {
  try {
    logger.log(`GET | Users data request`);
    const users = await Users.find();
    return res.status(200).send(users);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error fetching users list', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send('Error fetching users');
  }
};

// * GET | Find user by name
exports.findByName = async (req, res) => {
  const { name } = req.query;
  try {
    const users = await Users.findOne(name, req.body);
    return res.status(200).send(users);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find user: ${name}`);
  }
};

// * GET | Find user by role
exports.findByRole = async (req, res) => {
  const { role } = req.query;
  try {
    const users = await Users.findOne(role, req.body);
    return res.status(200).send(users);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find ${role} users`);
  }
};

// * PATCH | Update current user
exports.patch = async (req, res) => {
  const { id } = req.query;
  try {
    // Rehash password when changing
    const hashedPwd = await argon2.hash(req.body.password, {
      type: argon2.argon2id
    });
    const users = await Users.findByIdAndUpdate(id, {
      username: req.body.username,
      password: hashedPwd,
      name: req.body.name,
      role: req.body.role,
      permission: req.body.permission,
      date: req.body.date
    });
    logger.log(`User credentials updated: ${users}`);
    return res.status(202).send(users);
  } catch (err) {
    rollbar.error(err);
    logger.error('Error updating user credentials', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error updating user ${id}`);
  }
};

// * DELETE | user by id
exports.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const users = await Users.findByIdAndDelete(id);
    logger.log(`User deleted with id: ${id}`);
    res.status(202).send(users);
  } catch (err) {
    rollbar.error(err);
    logger.error(`Error deleting user: ${id}`, {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send(`Error deleting user ${id}`);
  }
};
