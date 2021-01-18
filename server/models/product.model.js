/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
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
      type: String,
      trim: true
    },
    variant: {
      type: String,
      trim: true,
      lowercase: true
    },
    type: {
      type: String,
      trim: true,
      lowercase: true
    },
    category: {
      type: String,
      trim: true,
      lowercase: true
    },
    quantity: {
      type: Number,
      min: 0
    },
    price: {
      type: Number,
      min: 0
    },
    supplier: {
      type: [String],
      default: 'MC.fmly',
      trim: true,
      unique: false
    }
  },
  { timestamps: true }
);

mongoose.model('products', productSchema);
