/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled, { createGlobalStyle } from 'styled-components';

/****************************************
 * * Shared Styles between `tables`
 ****************************************/

// * Tables
export const TableModule = createGlobalStyle`
  div.table-responsive {
    display: flex !important;
    width: 100%;
    height: 100vh;
    padding: 0 0 0 0.5rem;
    overflow: overlay !important;

    table {
      margin: 0;
      padding: 0 1rem 6rem 0 !important;
      background-color: transparent;
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
  white-space: nowrap;
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

  :hover {
    background-color: #161518 !important;
    border-radius: 0.3rem;

    button {
      visibility: visible;
    }
  }

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
  font-size: 1rem;
  width: max-content !important;
  padding: 1.2rem 1rem 1.2rem 0 !important;
  margin: 0 1rem !important;
  border: none !important;
  table-layout: fixed;
  white-space: nowrap;
  overflow: auto !important;
  text-overflow: clip !important;
  vertical-align: middle !important;

  .actions {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0 10px 0 0;
  }
`;

// * When there are no items in table
export const NullItems = styled.h5`
  color: #c3c3c3;
  margin-bottom: 1rem;
  position: absolute;
  left: 36%;
  top: 16rem;
`;
