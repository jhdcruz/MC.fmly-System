/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';
import { useQuery } from 'react-query';

export const StatusApi = () => {
  return useQuery(
    'status',
    async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/auth/status`
      );
      return data;
    },
    {
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false
    }
  );
};
