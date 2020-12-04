/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
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
  border-radius: 0.3rem;
  border: 2px outset #e6a195;
  box-shadow: 3px 3px 8px #1b1b1b;
`;

const WideChart = styled(Chart)`
  width: 85.5vw;
  max-width: 85.5vw;
`;

const LargeChart = styled(WideChart)`
  height: 70vh;
`;

// * Inventory
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
    <WideChart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=5893384e-3df6-420c-bbfc-7689d93de7f8&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

// * Transactions / Orders
export const TotalRevenueChart = () => {
  return (
    <WideChart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=04bcf4e4-b1ec-415a-9060-444f0326a650&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const OrdersPerMonth = () => {
  return (
    <WideChart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=d1b15539-d2f0-41f3-a111-9b30dc7fe568&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};

export const OrderStatus = () => {
  return (
    <WideChart src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=aa579fde-2af9-4913-b3ea-de1e70db8a06&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
};
