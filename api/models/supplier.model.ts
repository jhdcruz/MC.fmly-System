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

const supplierSchema = new Schema({
  icon: {
    type: String,
    default:
      'https://spng.pngfind.com/pngs/s/17-171509_cornerstone-community-bible-church-team-icon-white-png.png',
    unique: false
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '',
    unique: false
  },
  type: {
    type: String,
    default: '',
    unique: false
  },
  address: {
    type: String,
    default: '',
    unique: false
  },
  website: {
    type: String,
    default: '',
    unique: false
  },
  contact: {
    type: String,
    default: '',
    unique: false
  }
});

mongoose.model('suppliers', supplierSchema);

export {};
