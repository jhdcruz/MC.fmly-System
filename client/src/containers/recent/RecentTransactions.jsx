/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */
import { lazy, Suspense, useState } from 'react';
import TransactionHeader from '../../components/tables/TransactionHeader';
import TransactionRow from '../../components/tables/TransactionRow';
import { Fallback, Loader } from '../../components/common/Loader';
import TransactionService from '../../services/TransactionService';

const TransactionModals = lazy(() =>
  import('../transactions/TransactionModals')
);

export default function RecentTransactions() {
  const { data } = TransactionService();
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
          editCancel={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          deleteCancel={() => showDeleteModal(false)}
          invoiceClose={() => showInvoiceModal(false)}
        />
      </Suspense>
    );
  };

  return (
    <>
      <Modals />
      {data && true ? (
        <TransactionHeader
          data={
            data &&
            data
              .slice(Math.max(data.length - 10, 0))
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
        <Fallback />
      )}
    </>
  );
}
