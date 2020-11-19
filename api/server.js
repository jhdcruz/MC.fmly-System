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
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

// set .env
const env = dotenv.config();
dotenvExpand(env);

const api = express();
const PORT = process.env.PORT || 5000;

// App Monitoring | Sentry
Sentry.init({
  dsn: `${process.env.SENTRY_PROJECT_DSN}`,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ api })
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control | tracesSampleRate: 1.0
  tracesSampleRate: 0.7
});

mongoose.Promise = global.Promise;

// * HTTP Headers
api.use(cors());
api.use(helmet());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

api.options('*', cors());

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

// * Main API route
api.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

// ? RequestHandler creates a separate execution context using domains, so that every
// ? transaction/span/breadcrumb is attached to its own Hub instance
api.use(Sentry.Handlers.requestHandler());
// ? TracingHandler creates a trace for every incoming request
api.use(Sentry.Handlers.tracingHandler());

// ? The error handler must be before any other error middleware and after all controllers
api.use(
  Sentry.Handlers.errorHandler({
    shouldHandleError(error) {
      // Capture all 404 and 500 errors
      return error.status === 404 || error.status === 500;
    }
  })
);

// * Optional fallthrough error handler
api.use(function onError(
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars
  next
) {
  // ? The error id is attached to `res.sentry` to be returned
  // ? and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

module.exports = api;
