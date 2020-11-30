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
        <TableData className="code" colSpan={1}>
          <EntryActions edit={product.edit} delete={product.delete} />
          {product.code}
        </TableData>
        <TableData className="name">{product.name}</TableData>
        <TableData className="variant">
          <Tag variant="dark">{product.variant}</Tag>
        </TableData>
        <TableData className="type">
          <Tag variant="primary">{product.type}</Tag>
        </TableData>
        <TableData className="category">
          <Tag variant="info">{product.category}</Tag>
        </TableData>
        <TableData className="stock">
          {/* Quantity Color Indicator */}
          {(() => {
            if (product.quantity <= 10) {
              return <Tag variant="danger">{product.quantity}</Tag>;
            }
            if (product.quantity <= 20) {
              return <Tag variant="warning">{product.quantity}</Tag>;
            }
            if (product.quantity <= 300) {
              return <Tag variant="success">{product.quantity}</Tag>;
            } else {
              return <Tag variant="dark">{product.quantity}</Tag>;
            }
          })()}
        </TableData>
        <TableData className="updatedAt">
          {/* Parse date to human-friendly format */}
          <Moment fromNow date={product.updatedAt} />
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Moment
            format="D MMM YYYY | HH:mm"
            date={product.createdAt}
            withTitle
          />
        </TableData>
        <TableData className="price">
          <Tag variant="dark">₱{product.price}</Tag>
        </TableData>
      </TableRow>
    </>
  );
}
