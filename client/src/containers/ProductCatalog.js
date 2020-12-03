/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Categories from '../components/Categories';
import CardOverlay from '../components/cards/CardOverlay';
import ProductService from '../services/ProductService';
import SearchBar from '../components/common/SearchBar';
import Loader from '../components/common/Loader';
import Tag from '../components/common/Tag';

/************************************
 * * Product List, No Actions | POS
 ************************************/

export default function ProductCatalog() {
  const [products] = ProductService();

  // * Catalog Content
  const Catalog = (product) => {
    return (
      <CardOverlay
        _id={product._id}
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
    products &&
    products
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.category === items.category)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | type
  const productTypes =
    products &&
    products
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.type === items.type)
      )
      // Sort items
      .reverse();

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      <>
        {products && true ? (
          <>
            {products &&
              productCategories.map((categories) => (
                <Tab.Pane
                  key={categories.category}
                  eventKey={categories.category}
                >
                  {products
                    .filter((pane) => pane.category === categories.category)
                    .map((product) => Catalog(product))}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  // * Filter products by types
  const TypeFilter = () => {
    return (
      <>
        {products && true ? (
          <>
            {products &&
              productTypes.map((types) => (
                <Tab.Pane key={types.type} eventKey={types.type}>
                  {products
                    .filter((pane) => pane.type === types.type)
                    .map((product) => Catalog(product))}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  // * Display cards based on clicked product category/type
  const CardPanes = () => {
    return (
      <>
        <SearchBar />
        {/* Filtered Tables */}
        <Tab.Pane eventKey="default">
          {products && products.map((product) => Catalog(product))}
        </Tab.Pane>
        <CategoryFilter />
        <TypeFilter />
      </>
    );
  };

  return (
    <>
      {/* Display 'categories' component */}
      <Categories
        main="Categories"
        mainTabs={
          products &&
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
          products &&
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
