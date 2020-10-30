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

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    code: {
      type: String,
      uppercase: true,
      trim: true
    },
    name: {
      type: String
    },
    type: {
      type: String,
      trim: true,
      caseFirst: 'on',
      unique: true,
      collation: {
        locale: 'en',
        strength: 2
      }
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number
    }
  },
  { timestamps: true }
);

mongoose.model('products', productsSchema);
