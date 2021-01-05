/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';
import { useQuery } from 'react-query';
import ApiRoute from '../utils/apiRoute';

export const SuppliersApi = () => {
  const url = ApiRoute();

  return useQuery(
    'suppliers',
    async () => {
      const { data } = await axios.get(`${url}/suppliers`);
      return data;
    },
    {
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false
    }
  );
};
