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

const Products = mongoose.model('products');

export const ProductController = {
  // * GET | All Product
  get: async (req: NowRequest, res: NowResponse) => {
    try {
      const products: object = await Products.find();
      return res.status(200).send(products);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send('Error fetching products');
    }
  },

  // * POST | New Product/s
  post: async (req: NowRequest, res: NowResponse) => {
    try {
      const products: object = await Products.create(req.body);
      return res.status(201).send(products);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send('Error posting product/s');
    }
  },

  // * PUT | Overwrite a product
  put: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      const products: object = await Products.findByIdAndUpdate(id, req.body);
      return res.status(202).send(products);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send(`Error updating product ${id}`);
    }
  },

  // * DELETE | Product by id
  delete: async (req: NowRequest, res: NowResponse) => {
    const { id } = req.query;
    try {
      const products: object = await Products.findByIdAndDelete(id);
      return res.status(202).send(products);
    } catch (err: unknown) {
      console.error(err);
      res.status(500).send(`Error deleting product ${id}`);
    }
  }
};
