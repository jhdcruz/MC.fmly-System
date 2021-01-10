/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Products/table/Header';
import Row from '../../components/Products/table/Row';
import { ProductCard } from '../../components/Products/Card';
import { productCategories } from './Filters';
import Container from 'react-bootstrap/Container';

/**********************************
 * * Filter products by category
 * TODO: Fetch filtered data
 **********************************/
export default function ViewCategory({ data, view, edit, del }) {
  return (
    <>
      {productCategories(data).map((types) => (
        <Tab.Pane key={types.category} eventKey={types.category}>
          {view === 'list' ? (
            <Header
              data={data
                .filter((pane) => pane.category === types.category)
                .map((product) => Row(product, edit, del))}
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
              {ProductCard(types, edit)}
            </Container>
          )}
        </Tab.Pane>
      ))}
    </>
  );
}
