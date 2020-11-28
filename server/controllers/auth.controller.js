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
const argon2 = require('argon2');
const rollbar = require('../utils/rollbar');
const logger = require('../utils/logdna');

const Users = mongoose.model('users');

// * GET | Server Status
exports.status = async (req, res) => {
  try {
    return res.status(200).sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).sendStatus(500);
    rollbar.error(err);
  }
};

// * POST | User Registration
exports.register = async (req, res) => {
  console.log(req.body);
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
    console.error(err);
    rollbar.error(err);
    logger.error(`User registration error: ${err}`);
    res.status(500).send('Internal Server error occured');
  }
};

// * POST | User Authentication
exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    console.log(user);
    if (user) {
      // Dehash password and compare
      const cmp = await argon2.verify(user.password, req.body.password);
      if (cmp) {
        logger.log(`${user.username} Logged in.`);
        res.status(200).send(user.permission);
      } else {
        res.send('Credentials Mismatched!');
      }
    } else {
      res.send('Credentials Mismatched!');
    }
  } catch (err) {
    console.error(err);
    rollbar.error(err);
    logger.error(`User login error: ${err}`);
    res.status(500).send('Internal Server error occured');
  }
};
