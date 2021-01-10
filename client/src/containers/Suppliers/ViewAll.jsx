/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Suppliers/table/Header';
import Row from '../../components/Suppliers/table/Row';
import Poster from '../../components/Suppliers/Poster';
import Container from 'react-bootstrap/Container';

// * View all suppliers
export default function ViewAll({ data, view, edit, del }) {
  return (
    <Tab.Pane eventKey="default">
      {view === 'list' ? (
        <Header data={data.map((supplier) => Row(supplier, edit, del))} />
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
          {data.map((supplier) => Poster(supplier, edit, del))}
        </Container>
      )}
    </Tab.Pane>
  );
}
