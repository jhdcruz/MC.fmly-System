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

import { ComponentType, FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Table from 'react-bootstrap/Table';
import ProductEntry from './ProductEntry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { TableHeader } from './__tables.module';

const TableContainer = createGlobalStyle`
  div.table-responsive {
    display: flex !important;
    padding: 0 1rem 0 0.5rem !important;
  }
`;

const ProductTable = styled(Table)`
  width: 100%;
  min-width: 100% !important;
  margin: 1.5rem 0.5rem 2rem 0;
  overflow: auto;
  background-color: transparent;
  border-collapse: separate;
  border-spacing: 0 1rem;
  text-align: center;

  th,
  td {
    vertical-align: middle !important;
  }
`;

export interface TableData {
  data: ComponentType;
}

const NarrowTable: FC<TableData> = (props) => {
  return (
    <>
      <TableContainer />
      <ProductTable hover responsive>
        <thead>
          <tr>
            <TableHeader colSpan={1}>
              SKU <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Product <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Variant <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Type <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Category <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Quantity <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader>
              Created <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          <ProductEntry />
          {/* Insert Dynamic data | containers */}
          {props.data}
        </tbody>
      </ProductTable>
    </>
  );
};

export default NarrowTable;
