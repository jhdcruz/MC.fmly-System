/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import SearchBar from '../../components/common/SearchBar';
import Categories from '../../components/sidebar/Categories';
import { Fallback } from '../../components/common/Loader';
import { CardOverlay } from '../../components/cards/CardOverlay';
import { productCategories, productTypes } from '../products/ProductFilters';
import Tag from '../../components/common/Tag';
import ProductService from '../../services/ProductService';

/************************************
 * * Product List, No Actions | POS
 ************************************/

export default function PosCatalog() {
  const { data } = ProductService();

  // * Catalog Content
  const Catalog = (product) => {
    return (
      <CardOverlay
        key={product._id}
        title={
          <>
            {product.name}{' '}
            <Tag variant="primary" content={<>₱{product.price}</>} />
          </>
        }
        variant="dark"
        content={
          <>
            <Tag variant="info" content={product.variant} />{' '}
            {(() => {
              if (product.quantity <= 10) {
                return (
                  <Tag
                    variant="danger"
                    content={<>Qty. {product.quantity}</>}
                  />
                );
              } else if (product.quantity <= 20) {
                return (
                  <Tag
                    variant="warning"
                    content={<>Qty. {product.quantity}</>}
                  />
                );
              } else if (product.quantity <= 300) {
                return (
                  <Tag
                    variant="success"
                    content={<>Qty. {product.quantity}</>}
                  />
                );
              } else {
                return (
                  <Tag variant="dark" content={<>Qty. {product.quantity}</>} />
                );
              }
            })()}
          </>
        }
        footer={
          <>
            <Tag variant="dark" content={product.category} />{' '}
            <Tag variant="dark" content={product.type} />
          </>
        }
      />
    );
  };

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      data &&
      productCategories(data).map((categories) => (
        <Tab.Pane key={categories.category} eventKey={categories.category}>
          {data
            .filter((pane) => pane.category === categories.category)
            .map((product) => Catalog(product))}
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
            .map((product) => Catalog(product))}
        </Tab.Pane>
      ))
    );
  };

  // * Display cards based on clicked product category/type
  const CardPanes = () => {
    return (
      <>
        <SearchBar />
        {data && true ? (
          <div className="mt-3">
            <Tab.Pane eventKey="default">
              {data && data.map((product) => Catalog(product))}
            </Tab.Pane>
            <CategoryFilter />
            <TypeFilter />
          </div>
        ) : (
          <Fallback />
        )}
      </>
    );
  };
  return (
    <>
      {/* Display 'categories' component */}
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
    </>
  );
}
