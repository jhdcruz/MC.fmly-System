/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Transactions/table/Header';
import Row from '../../components/Transactions/table/Row';
import { TransactionCard } from '../../components/Transactions/Card';
import Container from 'react-bootstrap/Container';

// * View all transactions
export default function ViewAll({ data, view, edit, del, invoice }) {
  return (
    <Tab.Pane eventKey="default">
      {view === 'list' ? (
        <Header
          data={data.map((transaction) => Row(transaction, edit, del, invoice))}
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
          {data.map((transaction) =>
            TransactionCard(transaction, edit, invoice)
          )}
        </Container>
      )}
    </Tab.Pane>
  );
}
