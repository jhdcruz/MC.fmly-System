/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

const mongoose = require('mongoose');
const argon2 = require('argon2');
const rollbar = require('../middlewares/rollbar');
const logger = require('../middlewares/logdna');

const Users = mongoose.model('users');

// * GET | Server Status
exports.status = async (req, res) => {
  try {
    logger.log('GET | Server status probe');
    return res.status(200).sendStatus(200);
  } catch (err) {
    res.status(500).sendStatus(500);
    rollbar.error(err);
  }
};

// * POST | User Registration
exports.register = async (req, res) => {
  try {
    // Hash password on register
    const hashedPwd = await argon2.hash(req.body.password, {
      type: argon2.argon2id
    });
    const insertResult = await Users.create({
      username: req.body.username,
      password: hashedPwd,
      name: req.body.name,
      role: req.body.role,
      permission: req.body.permission,
      date: req.body.date
    });
    res.status(201).send(insertResult);
    logger.log(`New user registered: ${insertResult}`);
  } catch (err) {
    rollbar.error(err);
    logger.error(`User registration error: ${err}`);
    res.status(500).send('Internal Server error occured');
  }
};

// * POST | User Authentication
exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    if (user) {
      // Dehash password and compare
      const cmp = await argon2.verify(user.password, req.body.password);
      if (cmp) {
        logger.log(`${user.username} logged in.`);
        res.status(200).send(user.permission);
      } else {
        logger.warning(
          `Invalid credentials submitted for: ${req.body.username}`
        );
        res.send('Credentials Mismatched!');
      }
    } else {
      logger.warning(`Invalid credentials submitted for: ${req.body.username}`);
      res.send('Credentials Mismatched!');
    }
  } catch (err) {
    rollbar.error(err);
    logger.error(`User login error: ${err}`);
    res.status(500).send('Internal Server error occured');
  }
};
