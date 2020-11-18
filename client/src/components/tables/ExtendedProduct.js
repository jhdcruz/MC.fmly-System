/*
 *     MC.fmly Inventory System
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
import { Button } from 'react-bootstrap';
import { Tag } from './__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

const TableRow = styled.tr`
  color: white;
  background-color: #1e1e1e;
  border-radius: 1rem;
  width: max-content !important;
  box-shadow: 0 3px 5px #232323;

  .stock {
    padding-left: 1.7rem !important;
  }

  :hover {
    background-color: #181818 !important;

    button {
      visibility: visible;
    }
  }

  // Row's border-radius
  td:first-child {
    border-left-style: solid;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
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

const ProductActions = styled.div`
  margin: 0 auto;
  width: max-content;
  height: max-content;
`;

const ProductControl = styled(Button)`
  visibility: hidden;
  padding: 5px 10px;
  margin: 0 3px;
  font-size: 1.1vw;
  border: none;
`;

export default function ExtendedProduct(product) {
  return (
    <TableRow className="product" key={product._id}>
      <TableData className="code" colSpan={1}>
        <p>
          <ProductActions>
            <ProductControl variant="outline-danger">
              <FontAwesomeIcon icon={faTimes} />
            </ProductControl>
            <ProductControl variant="outline-success">
              <FontAwesomeIcon icon={faPen} />
            </ProductControl>
          </ProductActions>
        </p>
        {product.code}
      </TableData>
      <TableData className="name">{product.name}</TableData>
      <TableData className="type">
        <Tag pill variant="secondary">
          {product.variant}
        </Tag>
      </TableData>
      <TableData className="type">
        <Tag pill variant="primary">
          {product.type}
        </Tag>
      </TableData>
      <TableData className="category">
        <Tag pill variant="info">
          {product.category}
        </Tag>
      </TableData>
      <TableData className="stock">
        {/* Quantity Color Indicator */}
        {(() => {
          if (product.quantity <= 10) {
            return (
              <Tag pill variant="danger">
                {product.quantity}
              </Tag>
            );
          }
          if (product.quantity <= 20) {
            return (
              <Tag pill variant="warning">
                {product.quantity}
              </Tag>
            );
          }
          if (product.quantity <= 300) {
            return (
              <Tag pill variant="success">
                {product.quantity}
              </Tag>
            );
          } else {
            return (
              <Tag pill variant="dark">
                {product.quantity}
              </Tag>
            );
          }
        })()}
      </TableData>
      <TableData className="updatedAt">{product.updatedAt}</TableData>
      <TableData className="createdAt">{product.createdAt}</TableData>
    </TableRow>
  );
}
