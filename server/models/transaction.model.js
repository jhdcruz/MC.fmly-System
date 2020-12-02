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
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    receipt: {
      type: String
    },
    name: {
      type: String,
      trim: true
    },
    order_id: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minLength: 6
    },
    total: {
      type: Number,
      trim: true
    },
    status: {
      type: String,
      trim: true,
      default: 'Pending'
    },
    payment: {
      type: String,
      lowercase: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

mongoose.model('transactions', transactionSchema);
