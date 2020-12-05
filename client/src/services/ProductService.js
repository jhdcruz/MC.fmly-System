/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useEffect, useState } from 'react';
import axios from 'axios';

// Fetch products data
async function getAll() {
  let res = await axios.get(`https://mc-ims-api.herokuapp.com/products`);
  return res.data || [];
}

// Assign data to `products`
export default function ProductService() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      fetchProducts().catch((e) => {
        console.error(e);
      });
    }
  }, [products]);

  const fetchProducts = async () => {
    return await getAll().then((data) => {
      // Assign data to `products`
      setProducts(data);
    });
  };

  return [products];
}
