/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import { useState } from 'react';
import TransactionHeader from '../components/tables/TransactionHeader';
import TransactionRow from '../components/tables/TransactionRow';
import {
  AddTransaction,
  DeleteTransaction,
  EditTransaction
} from './modals/TransactionModal';
import { NoInvoice } from './modals/InvoiceModal';
import TransactionService from '../services/TransactionService';
import SearchControls from '../components/SearchControls';
import Loader from '../components/common/Loader';

export default function TransactionsList() {
  const [transactions] = TransactionService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
        {/* Transaction Modals */}
        <AddTransaction
          show={addModal}
          onHide={() => showAddModal(false)}
          submit={() => showAddModal(false)}
          cancel={() => showAddModal(false)}
        />
        <EditTransaction
          show={editModal}
          onHide={() => showEditModal(false)}
          submit={() => showEditModal(false)}
          cancel={() => showEditModal(false)}
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
    <div className="overflow-auto m-0 pt-5">
      <Modals />
      <SearchControls
        add="Add Product"
        list="List View"
        card="Card View"
        modal={() => showAddModal(true)}
      />

      {/* Transactions Table */}
      {transactions && true ? (
        <TransactionHeader
          data={
            transactions &&
            transactions.map((transaction) => (
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
    </div>
  );
}
