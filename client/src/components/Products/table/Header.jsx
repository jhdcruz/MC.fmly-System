/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { TableHeader, TableModule } from '../../common/modules/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';

/*********************************
 * * Product Table Header
 *********************************/

export default function Header(props) {
  return (
    <>
      <TableModule />
      <Table hover responsive>
        <thead>
          <tr>
            <TableHeader id="ItemCode" className="actions">
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
            <TableHeader id="Price">
              Price <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
          </tr>
        </thead>
        {/* Pass dynamic data as props */}
        <tbody>{props.data}</tbody>
      </Table>
    </>
  );
}
