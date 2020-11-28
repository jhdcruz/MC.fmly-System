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
