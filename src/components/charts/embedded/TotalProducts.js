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

const totalProducts = sdk.createChart({
  chartId: '780688f5-5f24-4687-ad2a-81338e33f629',
  width: '20vw',
  height: '150px',
  theme: 'dark',
  background: '#1e1e1e',
  autoRefresh: true,
  maxDataAge: 120,
  showAttribution: false
});

export default function TotalProducts() {
  const refTotalProducts = useRef(null);

  const renderTotalProducts = useCallback(async (ref) => {
    try {
      await totalProducts.render(ref);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const setRefTotalProducts = useCallback(
    (ref) => {
      if (ref) {
        renderTotalProducts(ref);
      }
      // Save a reference to the node
      refTotalProducts.current = ref;
    },
    [renderTotalProducts]
  );

  return <div id="test" ref={setRefTotalProducts} />;
}
