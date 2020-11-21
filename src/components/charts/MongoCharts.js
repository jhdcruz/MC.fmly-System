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

export const Chart = styled.iframe`
  width: 44.5vw !important;
  height: 60vh !important;
  background: #1e1e1e;
  margin-right: 0.5rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 3px 6px #232323;
`;

export const TypeDetails = () => {
  return (
    <Chart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=a647f8d1-9cd1-43e0-bea5-7c966947f573&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const CategoryDetails = () => {
  return (
    <Chart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=c646a994-9c0b-43d5-8d45-d5ae1330b48c&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};
