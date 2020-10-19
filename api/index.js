/*
 *     MC Inventory Management System
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

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// set .env
require('dotenv').config();

const api = express();
const PORT = process.env.PORT || 5000;

// Model Imports
require('./models/Product');

// Routes Imports
require('./routes/productRoutes')(api);

mongoose.Promise = global.Promise;

// Headers thingmajigs
api.use(cors());
api.use(helmet());
api.use(bodyParser.json());

// Connect to the Database || MongoDB Atlas
mongoose
  .connect(`${process.env.MONGODB_URL}` || `${process.env.MONGODB_LOCALHOST}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    api.listen(PORT);
    console.log(`API running in port: ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });

api.get('/api', (req, res) => {
  // Vercel's Serveless Functions settings
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

// Deprecated in favor of Vercel's static hoisting
// api.use(express.static('/public'));

module.exports = api;
