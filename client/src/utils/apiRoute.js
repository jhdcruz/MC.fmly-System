/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useMemo } from 'react';

export const tempRoute = () => {
  return process.env.REACT_APP_API_ENV === 'production'
    ? process.env.REACT_APP_API
    : process.env.REACT_APP_LOCAL_API;
};

// * Memoized route
// ! Use this instead of `tempRoute` unless you can't
// ! because of 'Rules of Hooks'
const ApiRoute = () => {
  return useMemo(() => {
    return process.env.REACT_APP_API_ENV === 'production'
      ? process.env.REACT_APP_API
      : process.env.REACT_APP_LOCAL_API;
  }, []);
};

export default ApiRoute;
