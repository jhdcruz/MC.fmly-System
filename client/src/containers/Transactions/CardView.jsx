/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../../components/Sidebar/Categories';
import SearchControls from '../../components/common/SearchControls';
import { Fallback } from '../../components/common/Loader';
import Notification from '../../components/common/Notification';
import { TransactionCard } from '../../components/Transactions/Card';
import { TransactionsApi } from '../../api/Transactions';
import { transactionPayment, transactionStatus } from './Filters';

// * Lazy imports
const TransactionModals = lazy(() => import('./Modals'));

/************************************
 * * Transaction List | Card View
 ************************************/

export default function CardView(props) {
  const { data } = TransactionsApi();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback="">
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

  // * Filter transactions by status
  const StatusFilter = () => {
    return (
      <>
        {data &&
          transactionStatus(data).map((statuses) => (
            <Tab.Pane key={statuses.status} eventKey={statuses.status}>
              {data &&
                data
                  .filter((pane) => pane.status === statuses.status)
                  .map((transaction) =>
                    TransactionCard(transaction, () => showEditModal(true))
                  )}
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
          transactionPayment(data).map((payments) => (
            <Tab.Pane key={payments.payment} eventKey={payments.payment}>
              {data
                .filter((pane) => pane.payment === payments.payment)
                .map((transaction) =>
                  TransactionCard(transaction, () => showEditModal(true))
                )}
            </Tab.Pane>
          ))}
      </>
    );
  };

  // * Display cards based on clicked transaction status/payment
  const TransactionCards = () => {
    return (
      <>
        <Modals />
        {/* Inventory Tab Controls */}
        <SearchControls
          add="Add Transaction"
          listView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              {data &&
                data.map((transaction) =>
                  TransactionCard(transaction, () => showEditModal(true))
                )}
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
    <>
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
        content={<TransactionCards />}
      />
      <Notification
        delay={7000}
        title="Notice"
        time="System Admin"
        message="Card view currently has limited functionality compared to List/Table view."
      />
    </>
  );
}
