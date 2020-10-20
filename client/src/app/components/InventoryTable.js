/*
 *     MC Inventory Management System
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

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import styled, { createGlobalStyle } from 'styled-components';
import getProducts from '../services/productService';
import showProduct from './Product';

const TableContainer = createGlobalStyle`
  div.table-responsive {
    display: flex !important;
  }
`;

const ProductTable = styled(Table)`
  height: 100%;
  width: 100%;
  min-width: 100% !important;
  min-height: 100%;
  margin: 0 3.5rem 2rem 0;
  overflow-x: scroll !important;
  overflow-y: hidden;
  background-color: white;
  box-shadow: 0 2px 5px #888;
`;

// Loading Spinner
const Loader = styled(Spinner)`
  margin: 10px auto;
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 41%;
  top: 19rem;
`;

// Shows on no products registered
const NullItems = styled.p`
  margin-bottom: 1rem;
  position: absolute;
  left: 50%;
  top: 130px;
`;

export default function InventoryTable() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      fetchProducts();
    }
  });

  const fetchProducts = async () => {
    let res = await getProducts.getAll();
    console.log(res);
    setProducts(res);
  };

  const verifyProducts = () => {
    return (
      <>
        {products && products.length >= 1 ? (
          products.map((product) => showProduct(product))
        ) : (
          <Loader animation="border" role="status" />
        )}
      </>
    );
  };

  return (
    <>
      <TableContainer />
      <ProductTable hover responsive>
        <thead>
          <tr>
            <th colSpan="1"># Code</th>
            <th>Product</th>
            <th>Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length === 0 ? (
            <NullItems> No products registered...</NullItems>
          ) : (
            verifyProducts()
          )}
        </tbody>
      </ProductTable>
    </>
  );
}
