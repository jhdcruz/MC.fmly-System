/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
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
