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

import styled from 'styled-components';

/*****************************************************
 * * Embed MongoDB Atlas Metrics (Datadog)
 *****************************************************/

export const Chart = styled.iframe`
  width: 100% !important;
  height: 97vh !important;
  background: #222126;
  border: none;
  box-shadow: 0 3px 6px #232323;

  iframe.webform-frame {
    background-color: #222126 !important;
    overflow: hidden !important;
  }
`;

export const DBMetrics = () => {
  return (
    <Chart
      sandbox="allow-pointer-lock allow-same-origin allow-scripts"
      src="https://p.datadoghq.com/sb/iiar95vh75yuvxwz-4f36a4b929487e20c789f3c806178482?theme=dark"
    />
  );
};
