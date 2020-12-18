/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Loader } from '../../components/common/Loader';
import { CardOverlay } from '../../components/cards/CardOverlay';
import Categories from '../../components/sidebar/Categories';
import SearchBar from '../../components/common/SearchBar';
import Tag from '../../components/common/Tag';
import ProductService from '../../services/ProductService';

/************************************
 * * Product List, No Actions | POS
 * TODO: POS functionality
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

  // * Removes duplicate properties | category
  const productCategories =
    data &&
    data
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.category === items.category)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | type
  const productTypes =
    data &&
    data
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.type === items.type)
      )
      // Sort items
      .reverse();

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      data &&
      productCategories.map((categories) => (
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
      productTypes.map((types) => (
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
          <>
            <Tab.Pane eventKey="default">
              {data && data.map((product) => Catalog(product))}
            </Tab.Pane>
            <CategoryFilter />
            <TypeFilter />
          </>
        ) : (
          <Loader />
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
          productCategories.map((product) => (
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
          productTypes.map((product) => (
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
