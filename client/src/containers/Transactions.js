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

import { useState } from 'react';
import TransactionHeader from '../components/tables/transactions/TransactionHeader';
import TransactionRow from '../components/tables/transactions/TransactionRow';
import TransactionForm from '../components/forms/TransactionForm';
import TransactionService from '../services/TransactionService';
// Commons
import Controls from '../components/common/Controls';
import Loader from '../components/common/Loader';

export default function Users() {
  const [transactions] = TransactionService();

  // * Modal Handlers
  const [modal, showModal] = useState(false);
  const handleClose = () => showModal(false);

  return (
    <div
      style={{
        overflow: 'auto',
        margin: '0 auto'
      }}
    >
      {/* User Form Modal */}
      <TransactionForm
        header="Add new transaction"
        show={modal}
        onHide={() => showModal(false)}
        submit={handleClose}
        cancel={handleClose}
      />

      {/* Tab Controls */}
      <Controls title="Add Transaction" modal={() => showModal(true)} />

      {/* Users Table */}
      {transactions && true ? (
        <TransactionHeader
          data={
            transactions &&
            transactions
              .map((transaction) => TransactionRow(transaction))
              .reverse()
          }
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
