/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useEffect, useState } from 'react';
import axios from 'axios';

// Fetch suppliers data from API
async function getAll() {
  let res = await axios.get(`https://mc-ims-api.herokuapp.com/suppliers`);
  return res.data || [];
}

export default function SupplierService() {
  const [suppliers, setSuppliers] = useState(null);

  useEffect(() => {
    if (!suppliers) {
      fetchSuppliers().catch((e) => {
        console.error(e);
      });
    }
  }, [suppliers]);

  const fetchSuppliers = async () => {
    return await getAll().then((data) => {
      // Assign data to `suppliers`
      setSuppliers(data);
    });
  };

  return [suppliers];
}
