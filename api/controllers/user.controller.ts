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

import { NowRequest, NowResponse } from '@vercel/node';
import * as mongoose from 'mongoose';
import * as argon2 from 'argon2';

const Users = mongoose.model('users');

export const UserController = {
  get: async (req: NowRequest, res: NowResponse) => {
    try {
      const users = await Users.find();
      return res.status(200).send(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching users');
    }
  },
  put: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      // Rehash password when changing
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
  },
  delete: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      const users = await Users.findByIdAndDelete(id);
      res.status(202).send(users);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error deleting user ${id}`);
    }
  },
  register: async (req: NowRequest, res: NowResponse) => {
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
  },
  login: async (req: NowRequest, res: NowResponse) => {
    try {
      const user = await Users.findOne({ username: req.body.username });
      console.log(user);
      if (user) {
        // @ts-ignore
        const cmp = await argon2.verify(user.password, req.body.password);
        if (cmp) {
          // @ts-ignore
          res.status(200).send(user.permission);
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
  }
};
