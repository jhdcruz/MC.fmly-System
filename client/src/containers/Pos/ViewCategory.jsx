/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import { PosCard } from '../../components/Pos/Card';
import { productCategories } from '../Inventory/Filters';
import Container from 'react-bootstrap/Container';

/**********************************
 * * Filter products by category
 **********************************/
export default function ViewCategory({ data }) {
  return productCategories(data).map((categories) => (
    <Tab.Pane key={categories.category} eventKey={categories.category}>
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
          .filter((pane) => pane.category === categories.category)
          .map((product) => PosCard(product))}
      </Container>
    </Tab.Pane>
  ));
}
