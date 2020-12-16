/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
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
        <tbody>{props.data}</tbody>
      </TransactionsTable>
    </>
  );
}
