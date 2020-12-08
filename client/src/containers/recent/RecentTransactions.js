/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */
import { useState } from 'react';
import TransactionHeader from '../../components/tables/TransactionHeader';
import TransactionRow from '../../components/tables/TransactionRow';
import {
  DeleteTransaction,
  EditTransaction,
  NoInvoice
} from '../transactions/TransactionModals';
import TransactionService from '../../services/TransactionService';
import Loader from '../../components/common/Loader';

export default function RecentTransactions() {
  const [transactions] = TransactionService();
  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

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
        <NoInvoice
          show={invoiceModal}
          onHide={() => showInvoiceModal(false)}
          save={() => showInvoiceModal(false)}
          close={() => showInvoiceModal(false)}
        />
      </>
    );
  };

  return (
    <>
      <Modals />
      {transactions && true ? (
        <TransactionHeader
          data={
            transactions &&
            transactions
              .slice(Math.max(transactions.length - 10, 0))
              .reverse()
              .map((transaction) => (
                <TransactionRow
                  edit={() => showEditModal(true)}
                  delete={() => showDeleteModal(true)}
                  id={transaction.id}
                  order_id={transaction.order_id}
                  name={transaction.name}
                  status={transaction.status}
                  total={transaction.total}
                  payment={transaction.payment}
                  date={transaction.date}
                  createdAt={transaction.createdAt}
                  receipt={
                    transaction.receipt && true ? (
                      // eslint-disable-next-line jsx-a11y/anchor-has-content
                      <a
                        href={transaction.receipt}
                        target="_blank"
                        rel="noreferrer"
                      />
                    ) : (
                      () => showInvoiceModal(true)
                    )
                  }
                />
              ))
          }
        />
      ) : (
        <Loader />
      )}
    </>
  );
}
