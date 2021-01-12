/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Products/table/Header';
import Row from '../../components/Products/table/Row';
import { ProductCard } from '../../components/Products/Card';

// * View all products
export default function ViewAll({ data, view, edit, del }) {
  return (
    <Tab.Pane eventKey="default">
      {view === 'list' ? (
        <Header data={data.map((product) => Row(product, edit, del))} />
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
          {data.map((product) => ProductCard(product, edit, del))}
        </Container>
      )}
    </Tab.Pane>
  );
}
