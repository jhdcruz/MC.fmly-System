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
import TransactionActions from './TransactionActions';
import { TableData, TableRow, Tag } from '../__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

/*********************************
 * * Transaction Table Rows <td>
 *********************************/

export default function TransactionRow(transaction) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="transaction" key={transaction._id} tabIndex={0}>
        <TableData className="order_id">
          <TransactionActions />
          <Tag variant="dark">{transaction.order_id}</Tag>
        </TableData>
        <TableData className="receipt">
          <a href={transaction.receipt} target="_blank" rel="noreferrer">
            <Tag variant="primary">
              <FontAwesomeIcon
                icon={faFile}
                style={{
                  color: '#1e1e1e'
                }}
              />
            </Tag>
          </a>
        </TableData>
        <TableData className="name">{transaction.name}</TableData>
        <TableData className="status">
          {/* Quantity Color Indicator */}
          {(() => {
            if (transaction.status === 'Completed') {
              return <Tag variant="success">{transaction.status}</Tag>;
            } else {
              return <Tag variant="danger">{transaction.status}</Tag>;
            }
          })()}
        </TableData>
        <TableData className="total">
          <Tag variant="warning">₱{transaction.total}</Tag>
        </TableData>
        <TableData className="payment">
          <Tag variant="info">{transaction.payment}</Tag>
        </TableData>
        <TableData className="date">
          {/* Parse date to human-friendly format */}
          <Moment
            format="D MMM YYYY"
            date={transaction.date}
            withTitle
          />
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Moment fromNow date={transaction.createdAt} />
        </TableData>
      </TableRow>
    </>
  );
}
