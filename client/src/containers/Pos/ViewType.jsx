/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import { PosCard } from '../../components/Pos/Card';
import { productTypes } from '../Inventory/Filters';
import Container from 'react-bootstrap/Container';

/**********************************
 * * Filter products by types
 **********************************/
export default function ViewType({ data }) {
  return productTypes(data).map((types) => (
    <Tab.Pane key={types.type} eventKey={types.type}>
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
          .filter((pane) => pane.type === types.type)
          .map((product) => PosCard(product))}
      </Container>
    </Tab.Pane>
  ));
}
