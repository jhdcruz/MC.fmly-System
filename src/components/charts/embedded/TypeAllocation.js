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

const typeAllocation = sdk.createChart({
  chartId: 'a647f8d1-9cd1-43e0-bea5-7c966947f573',
  width: '40vw',
  height: '60vh',
  theme: 'dark',
  background: '#1e1e1e',
  autoRefresh: true,
  maxDataAge: 120,
  showAttribution: false
});

export default function TypeAllocation() {
  const refTypeAllocation = useRef(null);

  const renderTypeAllocation = useCallback(async (ref) => {
    try {
      await typeAllocation.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setRefTypeAllocation = useCallback(
    (ref) => {
      if (ref) {
        renderTypeAllocation(ref);
      }
      // Save a reference to the node
      refTypeAllocation.current = ref;
    },
    [renderTypeAllocation]
  );

  return <div id="test" ref={setRefTypeAllocation} />;
}
