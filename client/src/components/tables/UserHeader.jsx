/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { TableHeader, TableModule } from './Tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

/*********************************
 * * Users Table Header
 *********************************/

const UsersTable = styled(Table)`
  width: 93vw !important;
  padding: 0 1rem 1rem !important;
`;

export default function UserHeader(props) {
  return (
    <>
      <TableModule />
      <UsersTable hover responsive>
        <thead>
          <tr>
            <TableHeader id="UserName" className="actions">
              Username <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Name">
              Name <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Role">
              Role <FontAwesomeIcon icon={faCaretDown} />
            </TableHeader>
            <TableHeader id="Permission">
              Permission <FontAwesomeIcon icon={faCaretDown} />
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
        <tbody>{props.data}</tbody>
      </UsersTable>
    </>
  );
}
