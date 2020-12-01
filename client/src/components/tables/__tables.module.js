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

import styled, { createGlobalStyle } from 'styled-components';
import Badge from 'react-bootstrap/Badge';

/****************************************
 * * Shared Styles between `tables`
 ****************************************/

// * Tables
export const TableModule = createGlobalStyle`
  div.table-responsive {
    display: inline-flex !important;
    width: max-content;
    height: 100%;
    padding: 0 0 0 0.5rem;
    overflow: auto !important;

    table {
      display: inline-table;
      height: 100vh;
      width: 100%;
      margin: 0;
      overflow: auto !important;
      background-color: transparent;

      // * Table Data Margins / Seperators
      border-collapse: separate;
      border-spacing: 0 1rem;
    }

    .actions {
      text-align: center;
    }
  }
`;

// * Table Heading
export const TableHeader = styled.th`
  font-size: 1.3vw;
  color: #c3c3c3;
  border: none !important;
  width: max-content !important;
  vertical-align: middle !important;

  :hover {
    color: #2549cb;
    cursor: pointer;
  }
`;

// * Table Data Row
export const TableRow = styled.tr`
  color: white;
  background-color: #222126;
  border-radius: 1rem;
  width: 100vw !important;
  box-shadow: 1px 2px 5px #1b1b1b;

  .permission,
  .payment {
    text-transform: capitalize;
  }

  :hover,
  :active,
  :focus {
    background-color: #161518 !important;
    border-radius: 0.3rem;
    outline: #e6a195 ridge 2px !important;

    button {
      visibility: visible;
    }
  }

  // * Row's border-radius
  td:first-child {
    border-left-style: solid;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
`;

// * Table Data Cell
export const TableData = styled.td`
  color: white;
  text-indent: 0.6rem;
  font-size: 1.2vw;
  width: max-content !important;
  padding: 1.2rem 1rem 1.2rem 0 !important;
  margin: 0 1rem !important;
  border: none !important;
  table-layout: fixed;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  vertical-align: middle !important;

  .actions {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0 10px 0 0;
  }
`;

// * Color Badges
// ! Different from <Tag /> component
// ! because of width/padding bug in tables
export const Tag = styled(Badge)`
  font-size: 1.2vw;
  padding: 6px 10px 6px 0;
  border-radius: 0.3rem;
  box-shadow: 1px 2px 5px #1b1b1b;
`;

// * When there are no items in table
export const NullItems = styled.h5`
  color: #c3c3c3;
  margin-bottom: 1rem;
  position: absolute;
  left: 36%;
  top: 16rem;
`;
