/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import styled from 'styled-components';

/*******************************
 * * MongoDB Embeddable Charts
 *******************************/

const Table = styled.iframe`
  width: 42vw !important;
  min-width: 36vw !important;
  height: 77vh !important;
  background: #222126;
  margin: 1.5em 0.5rem 1rem;
  border: 2px outset #e6a195;
  border-radius: 0.3rem;
  box-shadow: 3px 3px 8px #1b1b1b;
`;

export const UnderStocked = memo(() => {
  return (
    <Table src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=0d482624-41e6-4733-b256-844e341f22c1&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
});

export const OverStocked = memo(() => {
  return (
    <Table src="https://charts.mongodb.com/charts-pending-system-rgssg/embed/charts?id=7ee94dc4-1e62-4d92-bc08-4eeb19d6b47f&autoRefresh=true&maxDataAge=10&attribution=false&theme=dark" />
  );
});
