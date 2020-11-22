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

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

// set .env
const env = dotenv.config();
dotenvExpand(env);

const api = express();
const PORT = process.env.PORT || 5000;

// Utils
const logger = require('./utils/logger');
require('./utils/Sentry');

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
      console.log(
        `⚡️ [SERVER]: Server is running at: https://localhost:${PORT}`
      );
    });
  })
  .catch((err) => {
    logger.fatal(`Database connection down: ${err}`);
    console.error(err);
  });

// * Model Imports
require('./models/user.model');
require('./models/product.model');
require('./models/supplier.model');

// * Routes Imports
require('./routes/auth.route')(api);
require('./routes/user.route')(api);
require('./routes/product.route')(api);
require('./routes/supplier.route')(api);

// * Main API route | All HTTP Methods
// https://expressjs.com/en/4x/api.html#app.METHOD
api.all('/api', (req, res) => {
  logger.log(req);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

// * Optional fallthrough error handler
api.use(function onError(
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars
  next
) {
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

module.exports = api;
