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

import styled from 'styled-components';

/*******************************
 * * MongoDB Embeddable Charts
 *******************************/

const Widget = styled.iframe`
  width: 23vw;
  height: 150px;
  background: #222126;
  margin: 0.3rem 0 0.3rem 0.6rem;
  border: 3px ridge #e6a195;
  border-radius: 0.4rem;
  box-shadow: 1px 2px 8px 2px #232323;
`;

const LargeWidget = styled(Widget)`
  width: 36vw;
  height: 330px;
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

export const InventoryTotal = () => {
  return (
    <Widget src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=ce5c27a4-d190-44f7-9958-f66af536d3fa&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const InventoryCapacity = () => {
  return (
    <LargeWidget src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=14fb2d3e-b3de-4dc5-9088-acc3dd2fdb0e&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};
