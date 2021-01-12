/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import styled from 'styled-components';

/************************
 * * Maintenance Notice
 ************************/

const Notice = styled.h2`
  color: #e6a195;
  background-color: rgba(35, 34, 36, 0.9);
  padding: 3rem;
  border-radius: 0.7rem;
  margin: 5rem auto;
  z-index: 99;
`;

const Maintenance = memo(() => {
  return (
    <Notice>
      <strong>This feature is currently under maintenance</strong>
    </Notice>
  );
});

export default Maintenance;
