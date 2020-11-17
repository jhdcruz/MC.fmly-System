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
  // * GET | All users
  get: async (req: NowRequest, res: NowResponse) => {
    try {
      const users: object = await Users.find();
      return res.status(200).send(users);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send('Error fetching users');
    }
  },

  // * PUT | Overwrite current user
  put: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      // Rehash password when changing
      const hashedPwd: string = await argon2.hash(req.body.password, {
        type: argon2.argon2id
      });
      const users: object = await Users.findByIdAndUpdate(id, {
        username: req.body.username,
        password: hashedPwd,
        role: req.body.role,
        permission: req.body.permission,
        date: req.body.date
      });
      return res.status(202).send(users);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send(`Error updating user ${id}`);
    }
  },

  // * DELETE | user by id
  delete: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      const users: object = await Users.findByIdAndDelete(id);
      res.status(202).send(users);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send(`Error deleting user ${id}`);
    }
  },

  // * POST | User Registration
  register: async (req: NowRequest, res: NowResponse) => {
    console.log(req.body);
    try {
      // Hash password on register
      const hashedPwd: string = await argon2.hash(req.body.password, {
        type: argon2.argon2id
      });
      const insertResult: object = await Users.create({
        username: req.body.username,
        password: hashedPwd,
        role: req.body.role,
        permission: req.body.permission,
        date: req.body.date
      });
      res.status(201).send(insertResult);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send('Internal Server error occured');
    }
  },

  // * POST | User Authentication
  login: async (req: NowRequest, res: NowResponse) => {
    try {
      const user: any = await Users.findOne({ username: req.body.username });
      console.log(user);
      if (user) {
        // Dehash password and compare
        const cmp: boolean = await argon2.verify(
          user.password,
          req.body.password
        );
        if (cmp) {
          res.status(200).send(user.permission);
        } else {
          res.send('Credentials Mismatched!');
        }
      } else {
        res.send('Credentials Mismatched!');
      }
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send('Internal Server error occured');
    }
  }
};