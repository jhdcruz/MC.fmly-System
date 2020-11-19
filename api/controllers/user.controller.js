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

const Users = mongoose.model('users');

// * GET | All users
exports.get = async (req, res) => {
  try {
    const users = await Users.find();
    return res.status(200).send(users);
  } catch (err) {
    console.error(err);
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
    console.error(err);
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
    console.error(err);
    res.status(500).send(`Cannot find ${role} users`);
  }
};

// * PUT | Overwrite current user
exports.put = async (req, res) => {
  const { id } = req.query;
  try {
    // Rehash password when changing
    const hashedPwd = await argon2.hash(req.body.password, {
      type: argon2.argon2id
    });
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

// * DELETE | user by id
exports.delete = async (req, res) => {
  const { id } = req.query;
  try {
    const users = await Users.findByIdAndDelete(id);
    res.status(202).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error deleting user ${id}`);
  }
};
