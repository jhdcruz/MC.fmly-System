/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import TransactionHeader from '../../components/tables/TransactionHeader';
import TransactionRow from '../../components/tables/TransactionRow';
import {
  AddTransaction,
  DeleteTransaction,
  EditTransaction,
  NoInvoice
} from './TransactionModals';
import SearchControls from '../../components/SearchControls';
import Categories from '../../components/sidebar/Categories';
import UserHeader from '../../components/tables/UserHeader';
import TransactionService from '../../services/TransactionService';
import Loader from '../../components/common/Loader';

export default function TransactionsList(props) {
  const { data } = TransactionService();

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
    data &&
    data
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.status === items.status)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | payment
  const transactionPayment =
    data &&
    data
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
        {data && true ? (
          <>
            {data &&
              transactionStatus.map((transaction) => (
                <Tab.Pane
                  key={transaction.status}
                  eventKey={transaction.status}
                >
                  {/* TODO: Prevent header re-render */}
                  <UserHeader
                    data={
                      data &&
                      data
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
        {data && true ? (
          <>
            {data &&
              transactionPayment.map((transaction) => (
                <Tab.Pane
                  key={transaction.payment}
                  eventKey={transaction.payment}
                >
                  <UserHeader
                    _id={data && data._id}
                    data={data
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
          add="Add Transaction"
          cardView={props.view}
          modal={() => showAddModal(true)}
        />

        <Tab.Pane eventKey="default">
          <TransactionHeader
            data={data && data.map((transaction) => Transactions(transaction))}
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
        data &&
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
        data &&
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
