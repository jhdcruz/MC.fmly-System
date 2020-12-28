/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
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
    order: {
      type: [String],
      default: 'No order record',
      trim: true,
      unique: false,
      index: {
        unique: true,
        collation: {
          locale: 'en',
          strength: 2
        }
      }
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
