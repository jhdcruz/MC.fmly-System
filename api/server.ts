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

import { NowRequest, NowResponse } from '@vercel/node';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

const Rollbar = require('rollbar');
const helmet = require('helmet');
const dotenvExpand = require('dotenv-expand');

// set .env
const env: any = dotenv.config();
dotenvExpand(env);

// eslint-disable-next-line no-unused-vars
const rollbar = new Rollbar({
  accessToken: `${process.env.ROLLBAR_ID}`,
  captureUncaught: true,
  captureUnhandledRejections: true
});

// @ts-ignore
const api: any = express();
const PORT: Number = parseInt(`${process.env.PORT}`, 10) || 5000;

// @ts-ignore
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
    api.listen(PORT, () => {
      console.log(`Server started at PORT: ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error(err);
  });

// * Model Imports
require('./models/user.model');
require('./models/product.model');
require('./models/supplier.model');

// * Routes Imports
require('./routes/user.route')(api);
require('./routes/product.route')(api);
require('./routes/supplier.route')(api);

api.get('/api', (req: NowRequest, res: NowResponse) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

module.exports = api;
