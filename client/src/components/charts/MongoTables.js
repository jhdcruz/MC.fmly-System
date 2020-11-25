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

/*******************************
 * * MongoDB Embeddable Charts
 *******************************/

export const Chart = styled.iframe`
  width: 42vw !important;
  min-width: 36vw !important;
  height: 77vh !important;
  background: #222126;
  margin: 1.5em 0.5rem 1rem;
  border: 3px ridge #e6a195;
  border-radius: 0.3rem;
  box-shadow: 1px 2px 8px 2px #232323;
`;

export const UnderStocked = () => {
  return (
    <Chart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=0d482624-41e6-4733-b256-844e341f22c1&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};
export const OverStocked = () => {
  return (
    <Chart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=7ee94dc4-1e62-4d92-bc08-4eeb19d6b47f&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};
