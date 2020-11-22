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
const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

const api = express();

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
  // for finer control | default: tracesSampleRate: 1.0
  tracesSampleRate: 0.7
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
