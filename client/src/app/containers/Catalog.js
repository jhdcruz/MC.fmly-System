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

import { useEffect, useState } from 'react';
import getProducts from '../services/productService';
import ExtendedProduct from '../components/ExtendedProduct';
import ExtendedTable, { NullItems } from '../components/ExtendedTable';
import Loader from '../components/Loader';

export default function Catalog() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      fetchProducts().catch((err) => {
        console.error(err);
      });
    }
  });

  const fetchProducts = async () => {
    let res = await getProducts.getAll();
    setProducts(res);
  };

  const verifyProducts = () => {
    return (
      <>
        {products && products.length >= 1 ? (
          products.map((products) => ExtendedProduct(products))
        ) : (
          <Loader />
        )}
      </>
    );
  };

  return (
    <ExtendedTable
      data={
        products && products.length === 0 ? (
          <NullItems> No products registered...</NullItems>
        ) : (
          verifyProducts()
        )
      }
    />
  );
}
