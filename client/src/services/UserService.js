/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import { useEffect, useState } from 'react';
import axios from 'axios';

// Fetch products data
async function getAll() {
  let res = await axios.get(`https://mc-ims-api.herokuapp.com/users`);
  return res.data || [];
}

// Assign data to `products`
export default function UserService() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (!users) {
      fetchUsers().catch((e) => {
        console.error(e);
      });
    }
  }, [users]);

  const fetchUsers = async () => {
    return await getAll().then((data) => {
      setUsers(data);
    });
  };

  return [users];
}
