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

// All charts here are read-only & protected, so its fine to expose
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import { useCallback, useRef } from 'react';

const sdk = new ChartsEmbedSDK({
  baseUrl: 'https://charts.mongodb.com/charts-pending-system-rgssg'
});

const inventoryCapacity = sdk.createChart({
  chartId: 'ce5c27a4-d190-44f7-9958-f66af536d3fa',
  width: '20vw',
  height: '150px',
  theme: 'dark',
  background: '#1e1e1e',
  autoRefresh: true,
  maxDataAge: 120,
  showAttribution: false
});

export default function ProductDetails() {
  const refInventoryCapacity = useRef(null);

  const renderInventoryCapacity = useCallback(async (ref) => {
    try {
      await inventoryCapacity.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setRefInventoryCapacity = useCallback(
    (ref) => {
      if (ref) {
        renderInventoryCapacity(ref);
      }
      // Save a reference to the node
      refInventoryCapacity.current = ref;
    },
    [renderInventoryCapacity]
  );
  return <div id="test" ref={setRefInventoryCapacity} />;
}
