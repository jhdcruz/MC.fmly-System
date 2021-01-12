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
import { transactionPayment } from './Filters';

// * Filter transactions to payment
export default function ViewPayment({ data, view, edit, del, invoice }) {
  return (
    <>
      {transactionPayment(data).map((transaction) => (
        <Tab.Pane key={transaction.payment} eventKey={transaction.payment}>
          {view === 'list' ? (
            <Header
              data={data
                .filter((pane) => pane.payment === transaction.payment)
                .map((payment) => Row(payment, edit, del, invoice))}
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
              {TransactionCard(transaction, edit, del, invoice)}
            </Container>
          )}
        </Tab.Pane>
      ))}
    </>
  );
}
