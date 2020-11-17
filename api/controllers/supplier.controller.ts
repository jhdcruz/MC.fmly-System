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

const Suppliers = mongoose.model('suppliers');

export const SupplierController = {
  // * GET | All Suppliers
  get: async (req: NowRequest, res: NowResponse) => {
    try {
      const suppliers: object = await Suppliers.find();
      return res.status(200).send(suppliers);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching suppliers');
    }
  },
  post: async (req: NowRequest, res: NowResponse) => {
    try {
      const suppliers: object = await Suppliers.create(req.body);
      return res.status(201).send(suppliers);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error posting of suppliers');
    }
  },
  put: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      const suppliers: object = await Suppliers.findByIdAndUpdate(id, req.body);
      return res.status(202).send(suppliers);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error updating supplier ${id}`);
    }
  },
  delete: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      const suppliers: object = await Suppliers.findByIdAndDelete(id);
      return res.status(202).send(suppliers);
    } catch (err) {
      console.error(err);
      res.status(500).send(`Error deleting supplier ${id}`);
    }
  }
};
