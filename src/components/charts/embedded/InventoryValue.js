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

import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import { useCallback, useRef } from 'react';

const sdk = new ChartsEmbedSDK({
  baseUrl: 'https://charts.mongodb.com/charts-pending-system-rgssg'
});

const inventoryValue = sdk.createChart({
  chartId: '78a26494-6b97-40b3-a327-d1e506b7d895',
  width: '20vw',
  height: '150px',
  theme: 'dark',
  background: '#1e1e1e',
  autoRefresh: true,
  maxDataAge: 120,
  showAttribution: false
});

export default function InventoryValue() {
  const refInventoryValue = useRef(null);

  const renderInventoryValue = useCallback(async (ref) => {
    try {
      await inventoryValue.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setRefInventoryValue = useCallback(
    (ref) => {
      if (ref) {
        renderInventoryValue(ref);
      }
      // Save a reference to the node
      refInventoryValue.current = ref;
    },
    [renderInventoryValue]
  );

  return <div id="test" ref={setRefInventoryValue} />;
}
