/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Moment from 'react-moment';
import { TableData, TableRow, Tag } from './__tables.module';
import EntryActions from '../common/EntryActions';

/*********************************
 * * User Table Row
 *********************************/

export default function UserRow(user) {
  return (
    <>
      {/* User | Table Row */}
      <TableRow className="product" key={user._id} tabIndex={0}>
        <TableData>
          <EntryActions edit={user.edit} delete={user.delete} />
          <Tag variant="dark">{user.username}</Tag>
        </TableData>
        <TableData className="name">{user.name}</TableData>
        <TableData className="role">
          <Tag variant="primary">{user.role}</Tag>
        </TableData>
        <TableData className="permission">
          {/* Permission Color Indicator */}
          {(() => {
            if (user.permission === 'admin') {
              return <Tag variant="warning">{user.permission}</Tag>;
            } else if (user.permission === 'sysadmin') {
              return <Tag variant="danger">{user.permission}</Tag>;
            } else if (user.permission === 'inventory') {
              return <Tag variant="success">{user.permission}</Tag>;
            } else {
              return <Tag variant="info">{user.permission}</Tag>;
            }
          })()}
        </TableData>
        <TableData className="updatedAt">
          {/* Parse date to human-friendly format */}
          <Moment fromNow date={user.updatedAt} />
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Moment format="D MMM YYYY | HH:mm" date={user.createdAt} withTitle />
        </TableData>
      </TableRow>
    </>
  );
}
