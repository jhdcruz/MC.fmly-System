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
import Categories from '../components/sidebar/Categories';
import Tab from 'react-bootstrap/Tab';
import UserHeader from '../components/tables/UserHeader';
import Loader from '../components/common/Loader';
import Nav from 'react-bootstrap/Nav';

export default function TransactionsList() {
  const [transactions] = TransactionService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

  const Modals = () => {
    return (
      <>
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

  const Transactions = (transaction) => {
    return (
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
            <a href={transaction.receipt} target="_blank" rel="noreferrer" />
          ) : (
            () => showInvoiceModal(true)
          )
        }
      />
    );
  };

  // * Removes duplicate properties | status
  const transactionStatus =
    transactions &&
    transactions
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.status === items.status)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | payment
  const transactionPayment =
    transactions &&
    transactions
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.payment === items.payment)
      )
      // Sort items
      .reverse();

  // * Filter transactions by status
  const StatusFilter = () => {
    return (
      <>
        {transactions && true ? (
          <>
            {transactions &&
              transactionStatus.map((transaction) => (
                <Tab.Pane
                  key={transaction.status}
                  eventKey={transaction.status}
                >
                  {/* TODO: Prevent header re-render */}
                  <UserHeader
                    data={
                      transactions &&
                      transactions
                        .filter((pane) => pane.status === transaction.status)
                        .map((transactionByStatus) =>
                          Transactions(transactionByStatus)
                        )
                    }
                  />
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  // * Filter transactions by payments
  const PaymentFilter = () => {
    return (
      <>
        {transactions && true ? (
          <>
            {transactions &&
              transactionPayment.map((transaction) => (
                <Tab.Pane
                  key={transaction.payment}
                  eventKey={transaction.payment}
                >
                  <UserHeader
                    _id={transactions && transactions._id}
                    data={transactions
                      .filter((pane) => pane.payment === transaction.payment)
                      .map((transactionByPayment) =>
                        Transactions(transactionByPayment)
                      )}
                  />
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  const TransactionTable = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add Product"
          list="List View"
          card="Card View"
          modal={() => showAddModal(true)}
        />

        <Tab.Pane eventKey="default">
          <TransactionHeader
            data={
              transactions &&
              transactions.map((transaction) => Transactions(transaction))
            }
          />
        </Tab.Pane>
        <StatusFilter />
        <PaymentFilter />
      </>
    );
  };

  return (
    <Categories
      main="Status"
      mainTabs={
        transactions &&
        transactionStatus.map((transaction) => (
          <Nav.Item key={transaction.status}>
            <Nav.Link eventKey={transaction.status}>
              {transaction.status}
            </Nav.Link>
          </Nav.Item>
        ))
      }
      secondary="Payment"
      secondaryTabs={
        transactions &&
        transactionPayment.map((transaction) => (
          <Nav.Item key={transaction.payment}>
            <Nav.Link eventKey={transaction.payment}>
              {transaction.payment}
            </Nav.Link>
          </Nav.Item>
        ))
      }
      content={<TransactionTable />}
    />
  );
}
