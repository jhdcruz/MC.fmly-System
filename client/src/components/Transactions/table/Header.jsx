/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Table from 'react-bootstrap/Table';
import { TableHeader, TableModule } from '../../common/modules/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

/*********************************
 * * Transaction Table Header
 *********************************/

export default function Header(props) {
  return (
    <>
      <TableModule />
      <Table hover responsive>
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
      </Table>
    </>
  );
}
