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
import { TableHeader, TableModule } from './__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';

/*********************************
 * * Products Table Header | POS
 *********************************/

const CatalogTable = styled(Table)`
  padding: 0 1rem 1rem !important;
`;

export default function CatalogHeader(props) {
  return (
    <>
      <TableModule />
      <CatalogTable hover responsive>
        <thead>
          <tr>
            <TableHeader id="ItemCode" className="actions">
              SKU <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Price">
              Price <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="ProductName">
              Product <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Variant">
              Variant <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Quantity">
              Quantity <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="ItemType">
              Type <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Category">
              Category <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="UpdatedAt">
              Updated <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="CreatedAt">
              Created <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
          </tr>
        </thead>
        {/* Pass dynamic data as props */}
        <tbody key={props._id}>{props.data}</tbody>
      </CatalogTable>
    </>
  );
}
