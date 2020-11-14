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
const argon2 = require('argon2');

const Users = mongoose.model('users');

exports.get = async (req, res) => {
  try {
    const users = await Users.find();
    return res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching users');
  }
};

exports.put = async (req, res) => {
  const { id } = req.params;
  try {
    const hashedPwd = await argon2.hash(req.body.password);
    const users = await Users.findByIdAndUpdate(id, {
      username: req.body.username,
      password: hashedPwd,
      role: req.body.role,
      permission: req.body.permission,
      date: req.body.date
    });
    return res.status(202).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating user ${id}`);
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await Users.findByIdAndDelete(id);
    res.status(202).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error deleting user ${id}`);
  }
};

// User Creation | Register
exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const hashedPwd = await argon2.hash(req.body.password, {
      type: argon2.argon2id
    });
    const insertResult = await Users.create({
      username: req.body.username,
      password: hashedPwd,
      role: req.body.role,
      permission: req.body.permission,
      date: req.body.date
    });
    res.status(201).send(insertResult);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server error occured');
  }
};

// User Validation | Login
exports.login = async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.username });
    console.log(user);
    if (user) {
      const cmp = await argon2.verify(user.password, req.body.password);
      if (cmp) {
        res.status(200).send(`Logged in as: ${req.body.username}`);
      } else {
        res.send('Credentials Mismatched!');
      }
    } else {
      res.send('Credentials Mismatched!');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server error occured');
  }
};
