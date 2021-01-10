/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Fallback } from '../../components/common/Loaders';
import Categories from '../../components/Sidebar/Categories';
import SearchControls from '../../components/common/SearchControls';
import ViewAll from './ViewAll';
import ViewStatus from './ViewStatus';
import ViewPayment from './ViewPayment';
import { TransactionsApi } from '../../api/Transactions';
import { transactionPayment, transactionStatus } from './Filters';

const TransactionModals = lazy(() => import('./Modals'));

export default function View() {
  const { data } = TransactionsApi();
  const [view, setView] = useState('list');

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [bDeleteModal, showBDeleteModal] = useState(false);
  const [invoiceModal, showInvoiceModal] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback="">
        <TransactionModals
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          bDeleteModal={bDeleteModal}
          invoiceModal={invoiceModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          bDeleteHide={() => showBDeleteModal(false)}
          bDeleteSubmit={() => showBDeleteModal(false)}
          invoiceHide={() => showInvoiceModal(false)}
        />
      </Suspense>
    );
  };

  const TransactionsView = () => {
    return (
      <>
        <Modals />
        <SearchControls
          listView={() => setView('list')}
          cardView={() => setView('card')}
          addModal={() => showAddModal(true)}
          bulkDelete={() => showBDeleteModal(true)}
        />

        {data && true ? (
          <>
            {/* Display table based on clicked transaction status/payment */}
            <ViewAll
              data={data}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
              invoice={() => showInvoiceModal(true)}
            />
            <ViewStatus
              data={data}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
              invoice={() => showInvoiceModal(true)}
            />
            <ViewPayment
              data={data}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
              invoice={() => showInvoiceModal(true)}
            />
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
      content={<TransactionsView />}
    />
  );
}
