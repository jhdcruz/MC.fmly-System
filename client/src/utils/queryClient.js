/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { QueryClient } from 'react-query';

const queryOpts = {
  defaultOptions: {
    queries: {
      cacheTime: 5 // ms
    }
  }
};

export const queryClient = new QueryClient(queryOpts);
