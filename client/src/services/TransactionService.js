/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import { useEffect, useState } from 'react';
import axios from 'axios';

// Fetch transactions data
async function getAll() {
  let res = await axios.get(`https://mc-ims-api.herokuapp.com/transactions`);
  return res.data || [];
}

// Assign data to `transactions`
export default function TransactionService() {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    if (!transactions) {
      fetchTransactions().catch((e) => {
        console.error(e);
      });
    }
  }, [transactions]);

  const fetchTransactions = async () => {
    return await getAll().then((data) => {
      setTransactions(data);
    });
  };

  return [transactions];
}
