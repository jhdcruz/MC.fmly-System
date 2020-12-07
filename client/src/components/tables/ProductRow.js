/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Moment from 'react-moment';
import EntryActions from '../common/EntryActions';
import { TableData, TableRow, Tag } from './__tables.module';

/*********************************
 * * Product Table Row
 *********************************/

export default function ProductRow(product) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="product" key={product._id} tabIndex={0}>
        <TableData style={{ padding: '0.75rem 0' }}>
          <EntryActions edit={product.edit} delete={product.delete} />
        </TableData>
        <TableData className="code" colSpan={1} onClick={product.action}>
          {product.code}
        </TableData>
        <TableData className="name" onClick={product.action}>
          {product.name}
        </TableData>
        <TableData className="variant" onClick={product.action}>
          <Tag variant="dark">{product.variant}</Tag>
        </TableData>
        <TableData className="type" onClick={product.action}>
          <Tag variant="primary">{product.type}</Tag>
        </TableData>
        <TableData className="category" onClick={product.action}>
          <Tag variant="info">{product.category}</Tag>
        </TableData>
        <TableData className="stock" onClick={product.action}>
          {/* Quantity Color Indicator */}
          {(() => {
            if (product.quantity <= 10) {
              return <Tag variant="danger">{product.quantity}</Tag>;
            } else if (product.quantity <= 20) {
              return <Tag variant="warning">{product.quantity}</Tag>;
            } else if (product.quantity <= 300) {
              return <Tag variant="success">{product.quantity}</Tag>;
            } else {
              return <Tag variant="dark">{product.quantity}</Tag>;
            }
          })()}
        </TableData>
        <TableData className="updatedAt" onClick={product.action}>
          {/* Parse date to human-friendly format */}
          <Moment fromNow date={product.updatedAt} />
        </TableData>
        <TableData className="createdAt" onClick={product.action}>
          {/* Parse date to human-friendly format */}
          <Moment
            format="D MMM YYYY | HH:mm"
            date={product.createdAt}
            withTitle
          />
        </TableData>
        <TableData className="price" onClick={product.action}>
          <Tag variant="dark">₱{product.price}</Tag>
        </TableData>
      </TableRow>
    </>
  );
}
