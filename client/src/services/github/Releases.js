/*
 *     MC.fmly Inventory Management System
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

import axios from 'axios';
import { useEffect, useState } from 'react';

/************************
 * * Fetch Repo Releases
 ************************/

async function getReleases() {
  let res = await axios.get(
    `https://api.github.com/repos/jhdcruz/MC.fmly-System/releases`
  );
  return res.data || [];
}

export default function Releases() {
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    if (!releases) {
      fetchReleases().catch((e) => {
        console.error(e);
      });
    }
  });

  const fetchReleases = async () => {
    return await getReleases().then((data) => {
      setReleases(data);
    });
  };
  return [releases];
}
