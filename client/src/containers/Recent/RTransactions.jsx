/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */
import { lazy, Suspense, useState } from 'react';
import { Fallback, Loader } from '../../components/common/Loaders';
import Header from '../../components/Transactions/table/Header';
import { TransactionsApi } from '../../api/Transactions';
import Row from '../../components/Transactions/table/Row';

const TransactionRow = lazy(() =>
  import('../../components/Transactions/table/Row')
);
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
      <Suspense fallback={<Loader />}>
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
        <Suspense fallback={<Loader />}>
          <Header
            data={data.map((transaction) =>
              Row(
                transaction,
                () => showEditModal(false),
                () => showDeleteModal(true),
                () => showInvoiceModal(true)
              )
            )}
          />
        </Suspense>
      ) : (
        <Fallback />
      )}
    </>
  );
}
