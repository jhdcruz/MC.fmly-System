/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';
import Button from 'react-bootstrap/Button';
import { TableData, TableRow } from '../../common/modules/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import EntryActions from '../../common/EntryActions';
import Tag from '../../common/Tag';

const FormatDate = lazy(() => import('../../../utils/formatDate'));

/*********************************
 * * Transaction Table Row
 *********************************/

export default function Row(transaction, edit, del, invoice) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="transaction" key={transaction._id} tabIndex={0}>
        <TableData className="order_id">
          <EntryActions edit={edit} delete={del} />
          <Tag variant="dark" content={transaction.order_id} />
        </TableData>
        <TableData className="name">{transaction.name}</TableData>
        <TableData className="status">
          {/* Quantity Color Indicator */}
          {(() => {
            if (transaction.status === 'Completed') {
              return <Tag variant="success" content={transaction.status} />;
            } else if (transaction.status === 'Pending') {
              return <Tag variant="danger" content={transaction.status} />;
            } else {
              return <Tag variant="dark" content={transaction.status} />;
            }
          })()}
        </TableData>
        <TableData className="total">
          <Tag variant="warning" content={<>₱{transaction.total}</>} />
        </TableData>
        <TableData className="payment">
          <Tag variant="info" content={transaction.payment} />
        </TableData>
        <TableData className="receipt">
          <Button
            onClick={
              transaction.receipt && true ? (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a
                  href={transaction.receipt}
                  target="_blank"
                  rel="noreferrer"
                />
              ) : (
                // ? else show no invoice modal
                invoice
              )
            }
          >
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
            <FormatDate
              format="D MMM YYYY"
              date={transaction.date}
              withTitle={true}
            />
          </Suspense>
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <FormatDate fromNow={true} date={transaction.createdAt} />
          </Suspense>
        </TableData>
      </TableRow>
    </>
  );
}
