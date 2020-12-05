/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    image: {
      type: String,
      default: 'https://i.imgur.com/mgrAQIn.png'
    },
    username: {
      type: String,
      unique: true,
      required: true,
      minLength: 4
    },
    password: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minLength: 6
    },
    name: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      trim: true
    },
    permission: {
      type: String,
      trim: true,
      lowercase: true
    }
  },
  { timestamps: true }
);

mongoose.model('users', userSchema);
