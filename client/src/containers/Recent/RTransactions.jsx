/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */
import { lazy, Suspense, useState } from 'react';
import { Fallback } from '../../components/common/Loaders';
import Header from '../../components/Transactions/table/Header';
import Row from '../../components/Transactions/table/Row';
import { TransactionsApi } from '../../api/Transactions';

const TransactionModals = lazy(() => import('../Transactions/Modals'));

export default function RTransactions() {
  const { data } = TransactionsApi();

  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback="">
        <TransactionModals
          editModal={editModal}
          deleteModal={deleteModal}
          invoiceModal={invoiceModal}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          invoiceHide={() => showInvoiceModal(false)}
        />
      </Suspense>
    );
  };

  return (
    <>
      <Modals />
      {data && true ? (
        <Header
          data={
            data &&
            data
              // Reverse & limit result to 10 | prioritize new entries
              .slice(Math.max(data.length - 10, 0))
              .map((transaction) =>
                Row(
                  transaction,
                  () => showEditModal(true),
                  () => showDeleteModal(true),
                  () => showInvoiceModal(true)
                )
              )
              .reverse()
          }
        />
      ) : (
        <Fallback />
      )}
    </>
  );
}
