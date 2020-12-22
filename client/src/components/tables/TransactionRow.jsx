/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';
import Button from 'react-bootstrap/Button';
import { TableData, TableRow, Tag } from './__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import EntryActions from '../common/EntryActions';

const Moment = lazy(() => import('react-moment'));

/*********************************
 * * Transaction Table Row
 *********************************/

export default function TransactionRow(transaction) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="transaction" key={transaction._id} tabIndex={0}>
        <TableData className="order_id">
          <EntryActions edit={transaction.edit} delete={transaction.delete} />
          <Tag variant="dark">{transaction.order_id}</Tag>
        </TableData>
        <TableData className="name">{transaction.name}</TableData>
        <TableData className="status">
          {/* Quantity Color Indicator */}
          {(() => {
            if (transaction.status === 'Completed') {
              return <Tag variant="success">{transaction.status}</Tag>;
            } else if (transaction.status === 'Pending') {
              return <Tag variant="danger">{transaction.status}</Tag>;
            } else {
              return <Tag variant="dark">{transaction.status}</Tag>;
            }
          })()}
        </TableData>
        <TableData className="total">
          <Tag variant="warning">₱{transaction.total}</Tag>
        </TableData>
        <TableData className="payment">
          <Tag variant="info">{transaction.payment}</Tag>
        </TableData>
        <TableData className="receipt">
          <Button onClick={transaction.receipt}>
            <FontAwesomeIcon
              icon={faFile}
              style={{
                color: '#1e1e1e'
              }}
            />
          </Button>
        </TableData>
        <TableData className="date">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <Moment format="D MMM YYYY" date={transaction.date} withTitle />
          </Suspense>
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <Moment fromNow date={transaction.createdAt} />
          </Suspense>
        </TableData>
      </TableRow>
    </>
  );
}
