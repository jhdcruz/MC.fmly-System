/*
 *     MC.fmly Inventory System
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

import { useCallback, useRef } from 'react';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const sdk = new ChartsEmbedSDK({
  baseUrl: 'https://charts.mongodb.com/charts-pending-system-rgssg'
});

const categoryAllocation = sdk.createChart({
  chartId: 'c646a994-9c0b-43d5-8d45-d5ae1330b48c',
  width: '40vw',
  height: '55vh',
  theme: 'dark',
  background: '#1e1e1e',
  autoRefresh: true,
  maxDataAge: 120,
  showAttribution: false
});

export default function CategoryAllocation() {
  const refCategoryAllocation = useRef(null);

  const renderCategoryAllocation = useCallback(async (ref) => {
    try {
      await categoryAllocation.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setRefCategoryAllocation = useCallback(
    (ref) => {
      if (ref) {
        renderCategoryAllocation(ref);
      }
      // Save a reference to the node
      refCategoryAllocation.current = ref;
    },
    [renderCategoryAllocation]
  );

  return <div id="test" ref={setRefCategoryAllocation} />;
}
