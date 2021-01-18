/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const supplierSchema = new Schema(
  {
    icon: {
      type: String,
      default:
        'https://spng.pngfind.com/pngs/s/17-171509_cornerstone-community-bible-church-team-icon-white-png.png',
      unique: false
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      default: '',
      unique: false
    },
    category: {
      type: [String],
      default: 'N/A',
      trim: true,
      lowercase: true,
      unique: false
    },
    address: {
      type: String,
      default: 'N/A',
      unique: false
    },
    website: {
      type: String,
      default: '',
      trim: true,
      unique: false
    },
    contact: {
      person: {
        type: String,
        default: 'N/A',
        trim: true,
        unique: false
      },
      tel: {
        type: String,
        default: 'N/A',
        trim: true,
        unique: false
      }
    }
  },
  { timestamps: true }
);

mongoose.model('suppliers', supplierSchema);
