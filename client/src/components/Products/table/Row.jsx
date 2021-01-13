/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';
import { TableData, TableRow } from '../../common/modules/Tables';
import Tag from '../../common/Tag';
import EntryActions from '../../common/EntryActions';

const FormatDate = lazy(() => import('../../../utils/formatDate'));

/*********************************
 * * Product Table Row
 *********************************/

export default function Row(product, edit, del) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="product" key={product._id} tabIndex={0}>
        <TableData className="code" colSpan={1}>
          <EntryActions edit={edit} delete={del} />
          {product.code}
        </TableData>
        <TableData className="name">{product.name}</TableData>
        <TableData className="variant">
          <Tag variant="dark" content={product.variant} />
        </TableData>
        <TableData className="type">
          <Tag variant="primary" content={product.type} />
        </TableData>
        <TableData className="category">
          <Tag variant="info" content={product.category} />
        </TableData>
        <TableData className="stock">
          {/* Quantity Color Indicator */}
          {(() => {
            if (product.quantity <= 10) {
              return <Tag variant="danger" content={product.quantity} />;
            } else if (product.quantity <= 20) {
              return <Tag variant="warning" content={product.quantity} />;
            } else if (product.quantity <= 300) {
              return <Tag variant="success" content={product.quantity} />;
            } else {
              return <Tag variant="dark" content={product.quantity} />;
            }
          })()}
        </TableData>
        <TableData className="updatedAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <FormatDate fromNow={true} date={product.updatedAt} />
          </Suspense>
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <FormatDate
              format="D MMM YYYY | HH:mm"
              date={product.createdAt}
              withTitle={true}
            />
          </Suspense>
        </TableData>
        <TableData className="price">
          <Suspense fallback="—">
            <Tag variant="warning" content={<>₱{product.price}</>} />
          </Suspense>
        </TableData>

        <TableData className="supplier">
          <Tag variant="dark" content={product.supplier} />
        </TableData>
      </TableRow>
    </>
  );
}
