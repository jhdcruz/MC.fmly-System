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

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const rollbar = require('./middlewares/rollbar');
const logger = require('./middlewares/logdna');

// set .env
const env = dotenv.config();
dotenvExpand(env);

const api = express();

const PORT = process.env.PORT || 5000;
mongoose.Promise = global.Promise;

// * HTTP Headers
api.use(cors());
api.use(helmet());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

// * Connect to the Database || MongoDB Atlas
mongoose
  .connect(`${process.env.MONGO_ADMIN}` || `${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    // * Run server at $PORT
    api.listen(PORT, () => {
      console.log(`⚡️ [SERVER]: Server is running at PORT: ${PORT}`);
      logger.info(`Server started at PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    rollbar.critical(err);
    logger.fatal(err);
    console.error(err);
  });

// * Model Imports
require('./models/user.model');
require('./models/product.model');
require('./models/supplier.model');
require('./models/transaction.model');

// * Routes Imports
require('./routes/auth.route')(api);
require('./routes/user.route')(api);
require('./routes/product.route')(api);
require('./routes/supplier.route')(api);
require('./routes/transaction.route')(api);

// * Serve static files
api.use(express.static(path.join(__dirname, '/public')));
api.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// * Main API route | Allow all HTTP methods
// https://expressjs.com/en/4x/api.html#app.METHOD
api.all('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

// * AppMon middlewares
api.use(rollbar.errorHandler());

module.exports = api;
