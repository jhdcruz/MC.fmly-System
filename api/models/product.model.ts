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

import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    code: {
      type: String,
      uppercase: true,
      unique: true,
      trim: true
    },
    name: {
      type: String
    },
    variant: {
      type: String,
      trim: true,
      caseFirst: 'on'
    },
    type: {
      type: String,
      trim: true,
      caseFirst: 'on'
    },
    category: {
      type: String,
      trim: true,
      caseFirst: 'on'
    },
    quantity: {
      type: Number,
      min: 1
    },
    price: {
      type: Number,
      min: 0
    }
  },
  { timestamps: true }
);

mongoose.model('products', productSchema);

export {};