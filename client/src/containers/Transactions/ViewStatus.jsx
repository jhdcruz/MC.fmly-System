/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Transactions/table/Header';
import Row from '../../components/Transactions/table/Row';
import { TransactionCard } from '../../components/Transactions/Card';
import { transactionStatus } from './Filters';

// * Filter transactions to status
export default function ViewStatus({ data, view, edit, del, invoice }) {
  return (
    <>
      {transactionStatus(data).map((fTransaction) => (
        <Tab.Pane key={fTransaction.status} eventKey={fTransaction.status}>
          {view === 'list' ? (
            <Header
              data={data
                .filter((pane) => pane.status === fTransaction.status)
                .map((transactionByPayment) =>
                  Row(transactionByPayment, edit, del, invoice)
                )}
            />
          ) : (
            <Container
              style={{
                overflow: 'auto',
                padding: '0 0 8rem',
                margin: 0,
                width: '98.6%',
                height: '100vh'
              }}
            >
              {data
                .filter((pane) => pane.payment === fTransaction.payment)
                .map((transaction) =>
                  TransactionCard(transaction, edit, del, invoice)
                )}
            </Container>
          )}
        </Tab.Pane>
      ))}
    </>
  );
}
