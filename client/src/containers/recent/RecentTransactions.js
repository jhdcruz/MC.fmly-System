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
import TransactionHeader from '../../components/tables/TransactionHeader';
import TransactionRow from '../../components/tables/TransactionRow';
import TransactionService from '../../services/TransactionService';
import Loader from '../../components/common/Loader';
import { DeleteTransaction, EditTransaction } from '../modals/TransactionModal';

export default function RecentTransactions() {
  const [transactions] = TransactionService();
  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
        <EditTransaction
          show={editModal}
          onHide={() => showEditModal(false)}
          save={() => showEditModal(false)}
          close={() => showEditModal(false)}
        />
        <DeleteTransaction
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          save={() => showDeleteModal(false)}
          close={() => showDeleteModal(false)}
        />
      </>
    );
  };

  return (
    <>
      <Modals />
      <TransactionHeader
        _id={transactions && transactions._id}
        data={
          transactions && transactions.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            transactions &&
            transactions
              .slice(Math.max(transactions.length - 10, 0))
              .reverse()
              .map((transaction) => (
                <TransactionRow
                  delete={() => showDeleteModal(true)}
                  edit={() => showEditModal(true)}
                  _id={transaction._id}
                  order_id={transaction.order_id}
                  name={transaction.name}
                  status={transaction.status}
                  total={transaction.total}
                  payment={transaction.payment}
                  receipt={transaction.receipt}
                  date={transaction.date}
                  createdAt={transaction.createdAt}
                />
              ))
          ) : (
            <Loader />
          )
        }
      />
    </>
  );
}
