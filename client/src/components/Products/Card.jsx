/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';
import { ExpandedCard } from '../common/ItemCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import Tag from '../common/Tag';

const Moment = lazy(() => import('react-moment'));

export const ProductCard = (product, modal) => {
  return (
    <ExpandedCard
      action={modal}
      key={product._id}
      title={
        <>
          {product.name}{' '}
          <Tag variant="primary" content={<>₱{product.price}</>} />
        </>
      }
      variant="dark"
      content={
        <>
          <Tag variant="info" content={product.variant} />{' '}
          {(() => {
            if (product.quantity <= 10) {
              return (
                <Tag variant="danger" content={<>Qty. {product.quantity}</>} />
              );
            } else if (product.quantity <= 20) {
              return (
                <Tag variant="warning" content={<>Qty. {product.quantity}</>} />
              );
            } else if (product.quantity <= 300) {
              return (
                <Tag variant="success" content={<>Qty. {product.quantity}</>} />
              );
            } else {
              return (
                <Tag variant="dark" content={<>Qty. {product.quantity}</>} />
              );
            }
          })()}
        </>
      }
      footer={
        <>
          <Tag variant="dark" content={product.category} />{' '}
          <Tag variant="dark" content={product.type} />
        </>
      }
      date={
        <>
          <FontAwesomeIcon icon={faCalendarAlt} />{' '}
          <Suspense fallback="—">
            <Moment format="D MMM YYYY" date={product.createdAt} fromNow />
          </Suspense>
          {' | '}
          <FontAwesomeIcon icon={faHistory} />{' '}
          <Suspense fallback="—">
            <Moment fromNow date={product.updatedAt} />
          </Suspense>
        </>
      }
    />
  );
};
