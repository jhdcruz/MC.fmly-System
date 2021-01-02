/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';
import { useQuery } from 'react-query';

// * Fetch github repo releases
export default function Releases() {
  return useQuery(
    'releases',
    async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_GITHUB_URL}/releases`
      );
      return data;
    },
    { refetchInterval: 60000 }
  );
}
