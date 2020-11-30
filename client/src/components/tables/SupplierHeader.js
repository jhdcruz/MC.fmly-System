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
 * * Supplier Table Header
 *********************************/

const SuppliersTable = styled(Table)`
  width: 140vw !important;
  padding: 0 1rem 1rem 1rem;
  overflow: auto !important;
  table-layout: fixed;
  height: max-content !important;
`;

export default function SupplierHeader(props) {
  return (
    <>
      <TableModule />
      <SuppliersTable hover responsive>
        <thead>
          <tr>
            <TableHeader id="Name" className="actions">
              Name <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Description">
              Description <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Type">
              Type <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Contact">
              Contact <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Website">
              Website <FontAwesomeIcon icon={faCaretDown} />
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
      </SuppliersTable>
    </>
  );
}
