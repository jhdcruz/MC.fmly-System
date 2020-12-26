/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../../components/sidebar/Categories';
import SearchControls from '../../components/SearchControls';
import TransactionHeader from '../../components/tables/TransactionHeader';
import TransactionRow from '../../components/tables/TransactionRow';
import { Fallback, Loader } from '../../components/common/Loader';
import { transactionPayment, transactionStatus } from './TransactionFilters';
import TransactionService from '../../services/TransactionService';
import ResetScroll from '../../components/ResetScroll';

const TransactionModals = lazy(() => import('./TransactionModals'));

export default function TransactionsList(props) {
  const { data } = TransactionService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback={<Loader />}>
        <TransactionModals
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          invoiceModal={invoiceModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          addCancel={() => showAddModal(false)}
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

  // * Filter transactions by status
  const StatusFilter = () => {
    return (
      <>
        {data &&
          transactionStatus(data).map((transaction) => (
            <Tab.Pane key={transaction.status} eventKey={transaction.status}>
              <ResetScroll />
              <TransactionHeader
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
    );
  };

  // * Filter transactions by payments
  const PaymentFilter = () => {
    return (
      <>
        {data &&
          transactionPayment(data).map((transaction) => (
            <Tab.Pane key={transaction.payment} eventKey={transaction.payment}>
              <ResetScroll />
              <TransactionHeader
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

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              <ResetScroll />
              <TransactionHeader
                data={
                  data && data.map((transaction) => Transactions(transaction))
                }
              />
            </Tab.Pane>
            <StatusFilter />
            <PaymentFilter />
          </>
        ) : (
          <Fallback />
        )}
      </>
    );
  };

  return (
    <Categories
      main="Status"
      mainTabs={
        data &&
        transactionStatus(data).map((transaction) => (
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
        transactionPayment(data).map((transaction) => (
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
