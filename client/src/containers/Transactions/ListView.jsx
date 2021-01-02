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
import TransactionHeader from '../../components/Transactions/TransactionHeader';
import TransactionRow from '../../components/Transactions/TransactionRow';
import { Fallback } from '../../components/common/Loader';
import { TransactionsApi } from '../../api/Transactions';
import { transactionPayment, transactionStatus } from './Filters';

const TransactionModals = lazy(() => import('./Modals'));

export default function ListView(props) {
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
          transactionStatus(data).map((transaction) => (
            <Tab.Pane key={transaction.status} eventKey={transaction.status}>
              <TransactionHeader
                data={
                  data &&
                  data
                    .filter((pane) => pane.status === transaction.status)
                    .map((transactionByStatus) =>
                      TransactionRow(
                        transactionByStatus,
                        () => showEditModal(true),
                        () => showDeleteModal(true),
                        () => showInvoiceModal(true)
                      )
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
              <TransactionHeader
                _id={data && data._id}
                data={data
                  .filter((pane) => pane.payment === transaction.payment)
                  .map((transactionByPayment) =>
                    TransactionRow(
                      transactionByPayment,
                      () => showEditModal(true),
                      () => showDeleteModal(true),
                      () => showInvoiceModal(true)
                    )
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
              <TransactionHeader
                data={
                  data &&
                  data.map((transaction) =>
                    TransactionRow(
                      transaction,
                      () => showEditModal(true),
                      () => showDeleteModal(true),
                      () => showInvoiceModal(true)
                    )
                  )
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
