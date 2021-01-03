/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import SearchBar from '../../components/common/SearchBar';
import Categories from '../../components/Sidebar/Categories';
import { Fallback } from '../../components/common/Loaders';
import Display from './Display';
import { PosCard } from '../../components/Pos/Card';
import { ProductsApi } from '../../api/Products';
import { productCategories, productTypes } from '../Inventory/Filters';

/************************************
 * * Product List, No Actions | POS
 ************************************/

export default function Catalog() {
  const { data } = ProductsApi();

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      data &&
      productCategories(data).map((categories) => (
        <Tab.Pane key={categories.category} eventKey={categories.category}>
          {data
            .filter((pane) => pane.category === categories.category)
            .map((product) => PosCard(product))}
        </Tab.Pane>
      ))
    );
  };

  // * Filter products by types
  const TypeFilter = () => {
    return (
      data &&
      productTypes(data).map((types) => (
        <Tab.Pane key={types.type} eventKey={types.type}>
          {data
            .filter((pane) => pane.type === types.type)
            .map((product) => PosCard(product))}
        </Tab.Pane>
      ))
    );
  };

  // * Display cards based on clicked product category/type
  const CardPanes = () => {
    return (
      <>
        <div
          style={{
            margin: '0 0 1rem'
          }}
        >
          <SearchBar />
        </div>

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              {data && data.map((product) => PosCard(product))}
            </Tab.Pane>
            <CategoryFilter />
            <TypeFilter />
          </>
        ) : (
          <Fallback />
        )}
      </>
    );
  };
  return (
    <>
      <Categories
        main="Categories"
        mainTabs={
          data &&
          productCategories(data).map((product) => (
            <Nav.Item key={product.category}>
              <Nav.Link eventKey={product.category}>
                {product.category}
              </Nav.Link>
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
        content={<CardPanes />}
      />
      <Display />
    </>
  );
}
