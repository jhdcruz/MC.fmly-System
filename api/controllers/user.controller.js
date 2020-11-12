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
const bcrypt = require('bcrypt');

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
  const { _id } = req.params;
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
    const users = await Users.findByIdAndUpdate(_id, {
      username: req.body.username,
      password: hashedPwd,
      role: req.body.role,
      permission: req.body.permission,
      date: req.body.date
    });
    return res.status(202).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error updating user ${_id}`);
  }
};

exports.delete = async (req, res) => {
  const { _id } = req.params;
  try {
    const users = await Users.findByIdAndDelete(_id);
    res.status(202).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error deleting user ${_id}`);
  }
};

// User Creation | Register
exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, 10);
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
      const cmp = await bcrypt.compare(req.body.password, user.password);
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
