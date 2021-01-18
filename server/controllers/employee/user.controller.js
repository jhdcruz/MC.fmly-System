/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const argon2 = require('argon2');
const generateId = require('./generateId');
const rollbar = require('../../middlewares/rollbar');
const logger = require('../../middlewares/logdna');

const Users = mongoose.model('users');

// * GET | All users
exports.get = async (req, res) => {
  try {
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
exports.getNames = async (req, res) => {
  const name = req.params.name;
  try {
    const users = await Users.find({
      name: {
        $regex: name,
        $options: 'i'
      }
    });
    return res.status(200).send(users);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find user: ${name}`);
  }
};

// * GET | Find user by role
exports.getRoles = async (req, res) => {
  const role = req.params.role;
  try {
    const users = await Users.find({ role: role });
    return res.status(200).send(users);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find ${role} users`);
  }
};

// * GET | Find user by username
exports.findByUserName = async (req, res) => {
  const username = req.params.username;
  try {
    const users = await Users.find({
      username: {
        $regex: username,
        $options: 'i'
      }
    });
    return res.status(200).send(users);
  } catch (err) {
    rollbar.error(err);
    res.status(500).send(`Cannot find ${username}`);
  }
};

// * POST | User Registration
exports.register = async (req, res) => {
  try {
    // * Hash password on register
    const hashedPwd = await argon2.hash(req.body.password, {
      type: argon2.argon2id
    });
    const employeeId = await generateId(req.body.permission);
    const users = await Users.create({
      user_id: employeeId,
      username: req.body.username,
      password: hashedPwd,
      name: {
        first: req.body.name.first,
        middle: req.body.name.middle,
        last: req.body.name.last
      },
      position: req.body.position,
      permission: req.body.permission
    });
    res.status(201).send(users);
    logger.log(`New user registered: ${users}`);
  } catch (err) {
    rollbar.error(err);
    console.error(err);
    logger.error('User registration error', {
      indexMeta: true,
      meta: { err }
    });
    res.status(500).send('Internal Server error occured');
  }
};

// * PATCH | Update current user
exports.patch = async (req, res) => {
  const { id } = req.query;
  try {
    // * Rehash password when changing
    const hashedPwd = await argon2.hash(req.body.password, {
      type: argon2.argon2id
    });
    const users = await Users.findByIdAndUpdate(id, {
      username: req.body.username,
      password: hashedPwd,
      name: {
        first: req.body.name.first,
        middle: req.body.name.middle,
        last: req.body.name.last
      },
      position: req.body.position,
      permission: req.body.permission
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
