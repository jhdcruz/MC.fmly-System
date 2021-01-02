/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { ItemCard } from '../common/ItemCard';
import Tag from '../common/Tag';

export const PosCard = (product) => {
  return (
    <ItemCard
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
    />
  );
};
