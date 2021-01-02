/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';
import { useQuery } from 'react-query';

// * Fetch github repo commits
export default function Commits() {
  return useQuery(
    'commits',
    async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_GITHUB_URL}/commits`
      );
      return data;
    },
    { refetchInterval: 60000 }
  );
}
