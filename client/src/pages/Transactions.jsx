/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import TransactionsList from '../containers/transactions/TransactionsList';
import TransactionsCard from '../containers/transactions/TransactionsCard';

export default function Transactions() {
  const [view, setView] = useState('list');

  return view === 'list' ? (
    <TransactionsList view={() => setView('card')} />
  ) : (
    <TransactionsCard view={() => setView('list')} />
  );
}
