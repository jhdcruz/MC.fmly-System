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
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';

/****************************************
 * * Shared Styles between `tables`
 ****************************************/

// * Table Heading
export const TableHeader = styled.th`
  font-size: 1.3vw;
  color: #c3c3c3;
  border: none !important;
  width: max-content !important;

  :hover {
    color: #22a1f5;
    cursor: pointer;
  }
`;

// * Loading Spinner
export const Loader = styled(Spinner)`
  margin: 10px auto;
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 50%;
  top: 13rem;
`;

// * Circular Color Badges
export const Tag = styled(Badge)`
  font-size: 1.2vw;
  padding: 6px 10px 6px 0;
  box-shadow: 0 1px 5px 1px #1e1e1e;
`;

// * Shows on no products registered
export const NullItems = styled.h5`
  color: #c3c3c3;
  margin-bottom: 1rem;
  position: absolute;
  left: 36%;
  top: 16rem;
`;
