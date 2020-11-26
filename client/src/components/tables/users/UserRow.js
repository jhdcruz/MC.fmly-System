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

import styled from 'styled-components';
import Moment from 'react-moment';
import ProductActions from '../products/ProductActions';
import { Tag } from '../__tables.module';

/*********************************
 * * Product Table Rows <td>
 *********************************/

// * Styled components
const TableRow = styled.tr`
  color: white;
  background-color: #222126;
  border-radius: 1rem;
  width: max-content !important;
  box-shadow: 1px 2px 5px #1b1b1b;

  .stock {
    padding-left: 1.7rem !important;
  }

  :hover {
    background-color: #161518 !important;

    button {
      visibility: visible;
    }

    :active,
    :focus,
    ::selection {
      outline: 3px ridge #e6a195 !important;
      border: none;
    }
  }

  // Row's border-radius
  td:first-child {
    border-left-style: solid;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
  }
`;

const TableData = styled.td`
  color: white;
  text-indent: 0.6rem;
  font-size: 1.2vw;
  width: max-content !important;
  padding: 1.2rem 1rem 1.2rem 0 !important;
  margin: 0 1rem !important;
  border: none !important;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis !important;

  p {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    padding: 0 10px 0 0;
  }
`;

export default function UserRow(user) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="product" key={user._id} tabIndex={0}>
        <TableData className="actions" colSpan={1}>
          <ProductActions />
        </TableData>
        <TableData className="name">{user.name}</TableData>
        <TableData className="variant">
          <Tag variant="dark">{user.variant}</Tag>
        </TableData>
        <TableData className="type">
          <Tag variant="primary">{user.type}</Tag>
        </TableData>
        <TableData className="category">
          <Tag variant="info">{user.category}</Tag>
        </TableData>
        <TableData className="stock">
          {/* Quantity Color Indicator */}
          {(() => {
            if (user.quantity <= 10) {
              return <Tag variant="danger">{user.quantity}</Tag>;
            }
            if (user.quantity <= 20) {
              return <Tag variant="warning">{user.quantity}</Tag>;
            }
            if (user.quantity <= 300) {
              return <Tag variant="success">{user.quantity}</Tag>;
            } else {
              return <Tag variant="dark">{user.quantity}</Tag>;
            }
          })()}
        </TableData>
        <TableData className="updatedAt">
          {/* Parse date to human-friendly format */}
          <Moment fromNow date={user.updatedAt} />
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Moment
            format="D MMM YYYY | HH:mm"
            date={user.createdAt}
            withTitle
          />
        </TableData>
        <TableData className="price">
          <Tag variant="dark">₱{user.price}</Tag>
        </TableData>
      </TableRow>
    </>
  );
}
