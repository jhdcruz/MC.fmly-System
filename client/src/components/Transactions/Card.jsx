/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy } from 'react';
import { ExpandedCard } from '../common/ItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import Tag from '../common/Tag';

const FormatDate = lazy(() => import('../../utils/formatDate'));

export const TransactionCard = (transaction, edit) => {
  return (
    <ExpandedCard
      action={edit}
      key={transaction._id}
      title={
        <>
          {transaction.name}{' '}
          {(() => {
            if (transaction.status === 'Completed') {
              return <Tag variant="success" content={transaction.status} />;
            } else if (transaction.status === 'Pending') {
              return <Tag variant="danger" content={transaction.status} />;
            } else {
              return <Tag variant="dark" content={transaction.status} />;
            }
          })()}
        </>
      }
      variant="dark"
      content={
        <>
          <Tag
            variant="info"
            textCase="uppercase"
            content={transaction.order_id}
          />{' '}
          <Tag variant="warning" content={<>₱{transaction.total}</>} />{' '}
        </>
      }
      footer={
        <>
          <Tag variant="dark" content={transaction.payment} />
        </>
      }
      date={
        <>
          <FontAwesomeIcon icon={faCalendarAlt} />{' '}
          <FormatDate
            format="D MMM YYYY"
            date={transaction.createdAt}
            fromNow={true}
          />
          {' | '}
          <FontAwesomeIcon icon={faHistory} />{' '}
          <FormatDate fromNow={true} date={transaction.updatedAt} />
        </>
      }
    />
  );
};
