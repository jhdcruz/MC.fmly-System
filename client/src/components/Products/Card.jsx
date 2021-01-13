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
          <hr
            style={{
              margin: '0.35rem 0',
              border: '1px solid #e6a195'
            }}
          />
          Supplier: <Tag variant="warning" content={product.supplier} />
        </>
      }
      date={
        <>
          <FontAwesomeIcon icon={faCalendarAlt} />{' '}
          <FormatDate
            format="D MMM YYYY"
            fromNow={true}
            date={product.updatedAt}
          />
          {' | '}
          <FontAwesomeIcon icon={faHistory} />{' '}
          <FormatDate fromNow={true} date={product.updatedAt} />
        </>
      }
    />
  );
};
