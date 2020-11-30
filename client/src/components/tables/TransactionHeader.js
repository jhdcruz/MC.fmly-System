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

import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { TableHeader, TableModule } from './__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

/*********************************
 * * Transaction Table Header
 *********************************/

const TransactionsTable = styled(Table)`
  width: 93vw !important;
  padding: 0 1rem 1rem 1rem;
  overflow: auto !important;
  height: max-content !important;
`;

export default function TransactionHeader(props) {
  return (
    <>
      <TableModule />
      <TransactionsTable hover responsive>
        <thead>
          <tr>
            <TableHeader id="OrderId" className="actions">
              Order ID <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Name">
              Name <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Status">
              Status <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Total">
              Total <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Payment">
              Payment <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Receipt">
              Receipt <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Date">
              Date <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="CreatedAt">
              Created <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
          </tr>
        </thead>
        {/* Pass dynamic data as props */}
        <tbody key={props._id}>{props.data}</tbody>
      </TransactionsTable>
    </>
  );
}
