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

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Table from 'react-bootstrap/Table';
import styled, { createGlobalStyle } from 'styled-components';

const TableContainer = createGlobalStyle`
  div.table-responsive {
    display: inline-flex !important;
    width: 100vw;
    height: 100%;
    padding: 0 0 0 0.5rem !important;
    margin: 0;
    overflow: hidden !important;

    table {
      width: 100vw !important;
      padding: 0 3rem 0 1rem;
      margin: 3rem 1rem 2rem 0 !important;
      overflow: auto !important
    }

    #ItemCode {
      text-align: center;
    }
  }
`;

const TableHeader = styled.th`
  font-size: 1.3vw;
  color: #c3c3c3;
  border: none !important;
  width: max-content !important;

  :hover {
    color: #22a1f5;
    cursor: pointer;
  }
`;

const ProductTable = styled(Table)`
  display: inline-table;
  height: 100vh;
  width: 100%;
  min-width: 100% !important;
  min-height: 100vh;
  margin: 0 0 auto 0;
  overflow: auto !important;
  background-color: transparent;
  border-collapse: separate;
  border-spacing: 0 1rem;

  th,
  td {
    vertical-align: middle !important;
  }
`;

// Shows on no products registered
export const NullItems = styled.p`
  color: #c3c3c3;
  margin-bottom: 1rem;
  position: absolute;
  left: 48%;
  top: 16rem;
`;

const ExtendedTable = (props) => {
  return (
    <>
      <TableContainer />
      <ProductTable hover responsive>
        <thead>
          <tr>
            <TableHeader id="ItemCode">
              SKU <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="ProductName">
              Product <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="ItemType">
              Type <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Quantity">
              Quantity <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="UpdatedAt">
              Updated <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="CreatedAt">
              Created <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
          </tr>
        </thead>
        <tbody>{props.data}</tbody>
      </ProductTable>
    </>
  );
};

export default ExtendedTable;
