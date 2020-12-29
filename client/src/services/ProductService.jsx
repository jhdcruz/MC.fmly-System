/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';
import { useQuery } from 'react-query';

export default function ProductService() {
  return useQuery(
    'products',
    async () => {
      const { data } = await axios.get(
        'https://mc-ims-api.herokuapp.com/products'
      );
      return data;
    },
    {
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false
    }
  );
}
