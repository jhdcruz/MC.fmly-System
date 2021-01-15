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
import { productTypes } from './Filters';

/**********************************
 * * Filter products by types
 * TODO: Fetch filtered data
 **********************************/
export default function ViewType({ data, view, edit, del }) {
  return (
    <>
      {productTypes(data).map((fProduct) => (
        <Tab.Pane key={fProduct.type} eventKey={fProduct.type}>
          {view === 'list' ? (
            <Header
              data={data
                .filter((pane) => pane.type === fProduct.type)
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
              {data
                .filter((pane) => pane.category === fProduct.category)
                .map((product) => ProductCard(product, edit))}
              }
            </Container>
          )}
        </Tab.Pane>
      ))}
    </>
  );
}
