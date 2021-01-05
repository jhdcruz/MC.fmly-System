/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useMemo } from 'react';

const ApiRoute = () => {
  return useMemo(() => {
    return process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API
      : process.env.REACT_APP_LOCAL_API;
  }, []);
};

export default ApiRoute;
