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

import { FC, ReactElement } from 'react';
import Table from 'react-bootstrap/Table';
import styled, { createGlobalStyle } from 'styled-components';
import { TableHeader } from './__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const TableContainer = createGlobalStyle`
  div.table-responsive {
    display: inline-flex !important;
    width: 115vw;
    height: 100%;
    padding: 0 0 0 0.5rem !important;
    margin: 0 2rem 0 0;
    overflow-x: hidden !important;
    overflow-y: auto !important;

    table {
      width: max-content !important;
      padding: 0 3rem 0 1rem;
      margin: 5rem 1rem 2rem 0 !important;
      overflow: auto !important;
    }

    #ItemCode {
      text-align: center;
    }
  }
`;

const ProductTable = styled(Table)`
  display: inline-table;
  height: 100vh;
  width: 100%;
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

// Interface
export interface TableData {
  data: ReactElement;
}

const ExtendedTable: FC<TableData> = (props) => {
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
            <TableHeader id="Variant">
              Variant <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="ItemType">
              Type <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Category">
              Category <FontAwesomeIcon icon={faCaretDown} />
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
        {/* Insert Dynamic data | containers */}
        <tbody>{props.data}</tbody>
      </ProductTable>
    </>
  );
};

export default ExtendedTable;
