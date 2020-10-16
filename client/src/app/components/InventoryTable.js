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
import productService from '../services/productService';

export default function InventoryTable() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  });

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setProducts(res);
  };

  const showProduct = (product) => {
    return (
      <tr className="product" key={product.id}>
        <td className="name">{product.name}</td>
        <td className="stock">{product.stock}</td>
      </tr>
    );
  };

  return (
    <Table variant="dark" striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products && products.length > 0 ? (
          products.map((product) => showProduct(product))
        ) : (
          <tr>No products registered...</tr>
        )}
      </tbody>
    </Table>
  );
}
