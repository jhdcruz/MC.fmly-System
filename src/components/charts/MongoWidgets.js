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

const Widget = styled.iframe`
  width: 22vw !important;
  height: 150px !important;
  background: #1e1e1e;
  margin: 2.5rem 0.5rem 0.5rem 0;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 3px 6px #232323;
`;

export const TotalSuppliers = () => {
  return (
    <Widget src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=d4bb6a84-d360-42f0-880e-0bf274210410&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const TotalProducts = () => {
  return (
    <Widget src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=780688f5-5f24-4687-ad2a-81338e33f629&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const InventoryValue = () => {
  return (
    <Widget src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=78a26494-6b97-40b3-a327-d1e506b7d895&&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const InventoryCapacity = () => {
  return (
    <Widget src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=ce5c27a4-d190-44f7-9958-f66af536d3fa&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};
