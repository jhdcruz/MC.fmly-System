/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
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
