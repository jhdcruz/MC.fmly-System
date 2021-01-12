/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Fallback } from '../../components/common/Loaders';
import SearchBar from '../../components/common/SearchBar';
import Categories from '../../components/Sidebar/Categories';
import ViewCategory from './ViewCategory';
import ViewType from './ViewType';
import { PosCard } from '../../components/Pos/Card';
import { ProductsApi } from '../../api/Products';
import { productCategories, productTypes } from '../Inventory/Filters';
import Container from 'react-bootstrap/Container';

/************************************
 * * Product List, No Actions | POS
 ************************************/

export default function View() {
  const { data } = ProductsApi();

  const PosView = () => {
    return (
      <>
        <div className="mb-3">
          <SearchBar />
        </div>

        {data && true ? (
          <>
            {/* Display card based on clicked product category/type */}
            <Tab.Pane eventKey="default">
              <Container
                style={{
                  overflow: 'auto',
                  padding: '0 0 8rem',
                  margin: 0,
                  width: '98.6%',
                  height: '100vh'
                }}
              >
                {data.map((product) => PosCard(product))}
              </Container>
            </Tab.Pane>
            <ViewCategory data={data} />
            <ViewType data={data} />
          </>
        ) : (
          <Fallback />
        )}
      </>
    );
  };
  return (
    <Categories
      main="Categories"
      mainTabs={
        data &&
        productCategories(data).map((product) => (
          <Nav.Item key={product.category}>
            <Nav.Link eventKey={product.category}>{product.category}</Nav.Link>
          </Nav.Item>
        ))
      }
      secondary="Types"
      secondaryTabs={
        data &&
        productTypes(data).map((product) => (
          <Nav.Item key={product.type}>
            <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
          </Nav.Item>
        ))
      }
      content={<PosView />}
    />
  );
}
