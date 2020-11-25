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

const Chart = styled.iframe`
  width: 40vw;
  min-width: 40vw;
  max-width: 43vw;
  height: 60vh;
  background: #222126;
  margin: 1.5em auto 0 1rem;
  border: 3px ridge #e6a195;
  border-radius: 0.3rem;
  box-shadow: 1px 2px 8px 2px #232323;
`;

const LargeChart = styled(Chart)`
  width: 85.5vw;
  max-width: 85.5vw;
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

export const TotalByCategory = () => {
  return (
    <Chart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=c598473e-c338-402d-97ac-541d521734c1&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const TotalByTypes = () => {
  return (
    <Chart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=ac82f869-99cd-4fa0-a228-c51e26d0c517&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const ProductMap = () => {
  return (
    <LargeChart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=910171d2-3e28-42ac-8126-7eba1b3bb1be&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const ProductQuantityLines = () => {
  return (
    <LargeChart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=5893384e-3df6-420c-bbfc-7689d93de7f8&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};
