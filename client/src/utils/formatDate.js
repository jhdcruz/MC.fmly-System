/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';

const Moment = lazy(() => import('react-moment'));

const FormatDate = (props) => (
  <Suspense fallback="—">
    <Moment
      format={props.format}
      date={props.date}
      fromNow={props.fromNow || false}
      withTitle={props.withTitle || false}
    />
  </Suspense>
);

export default FormatDate;
