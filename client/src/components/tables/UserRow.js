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

import Moment from 'react-moment';
import { TableData, TableRow } from './__tables.module';
import EntryActions from '../common/EntryActions';
import Tag from '../common/Tag';

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
            }
            if (user.permission === 'sysadmin') {
              return <Tag variant="danger">{user.permission}</Tag>;
            }
            if (user.permission === 'inventory') {
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
