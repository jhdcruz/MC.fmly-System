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
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import styled, { createGlobalStyle } from 'styled-components';

import ProductEntry from './ProductEntry';
import Notification from './Notification';

const TableContainer = createGlobalStyle`
  div.table-responsive {
    display: flex !important;
    padding: 0 1rem 0 0.5rem !important;
  }
`;

const TableHeader = styled.th`
  color: #c3c3c3;
  border: none !important;

  :hover {
    color: #22a1f5;
    cursor: pointer;
  }
`;

const ProductTable = styled(Table)`
  width: 100%;
  min-width: 100% !important;
  margin: 0 0.5rem 2rem 0;
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

// Loading Spinner
export const Loader = styled(Spinner)`
  margin: 10px auto;
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 50%;
  top: 13rem;
`;

// Shows on no products registered
export const NullItems = styled.p`
  color: #c3c3c3;
  margin-bottom: 1rem;
  position: absolute;
  left: 36%;
  top: 16rem;
`;

const NarrowTable = (props) => {
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
          {props.data}
        </tbody>
      </ProductTable>
    </>
  );
};

export default NarrowTable;
