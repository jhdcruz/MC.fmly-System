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
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

/****************************************
 * * Shared Styles between `tables`
 ****************************************/

// * Tables Container
export const TableContainer = createGlobalStyle`
  div.table-responsive {
    display: inline-flex !important;
    width: max-content;
    height: 100%;
    padding: 0 0 0 0.5rem !important;
    overflow: auto !important;

    table {
      width: max-content !important;
      padding: 0 1rem 1rem 1rem;
      overflow: auto !important;
      height: max-content;
    }

    .actions {
      text-align: center;
    }
  }
`;

// * Actual Table
export const FluidContainer = styled(Table)`
  display: inline-table;
  height: 100vh;
  width: 100%;
  margin: 0;
  overflow: auto !important;
  background-color: transparent;
  border-collapse: separate;
  border-spacing: 0 1rem;

  th,
  td {
    vertical-align: middle !important;
  }
`;

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

// * Table Data Row
export const TableRow = styled.tr`
  color: white;
  background-color: #222126;
  border-radius: 1rem;
  width: max-content !important;
  box-shadow: 1px 2px 5px #1b1b1b;

  .permission {
    text-transform: capitalize;
  }

  :hover {
    background-color: #161518 !important;

    button {
      visibility: visible;
    }

    :active,
    :focus,
    ::selection {
      outline: 3px ridge #e6a195 !important;
      border: none;
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
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis !important;

  .actions {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0 10px 0 0;
  }
`;

// * Row Actions/Modals
export const RowButtons = styled.div`
  margin: 0 auto;
  width: max-content;
  height: max-content;
`;

// * Row Actions/Modals Buttons
export const RowControls = styled(Button)`
  visibility: hidden;
  padding: 5px 10px;
  margin: 0 3px;
  font-size: 1.1vw;
  border: none;
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

// * Color Badges
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
