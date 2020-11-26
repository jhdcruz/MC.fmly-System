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

import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../components/Categories';
import ProductHeader from '../components/tables/ProductHeader';
import ProductRow from '../components/tables/ProductRow';
import Loader from '../components/common/Loader';
import ProductService from '../services/ProductService';
import SearchBar from '../components/common/SearchBar';
import ProductForm from '../components/forms/ProductForm';

export default function Inventory() {
  const [products] = ProductService();

  // * Modal Handlers
  const [modal, showModal] = useState(false);
  const handleClose = () => showModal(false);

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

  // * Filter products by product category
  const CategoryFilter = () => {
    if (products && products.length !== null) {
      return (
        <>
          {products &&
            productCategories.map((categories) => (
              <Tab.Pane
                style={{ paddingTop: '6.7rem' }}
                key={categories.category}
                eventKey={categories.category}
              >
                <ProductHeader
                  map={products && products._id}
                  data={
                    products &&
                    products
                      .filter((pane) => pane.category === categories.category)
                      .map((product) => ProductRow(product))
                  }
                />
              </Tab.Pane>
            ))}
        </>
      );
    }
    return <Loader />;
  };

  // * Filter products by product types
  const TypeFilter = () => {
    if (products && products.length !== null) {
      return (
        <>
          {products &&
            productTypes.map((types) => (
              <Tab.Pane
                key={types.type}
                eventKey={types.type}
                style={{ paddingTop: '6.7rem' }}
              >
                <ProductHeader
                  _id={products && products._id}
                  data={products
                    .filter((pane) => pane.type === types.type)
                    .map((product) => ProductRow(product))}
                />
              </Tab.Pane>
            ))}
        </>
      );
    }
    return <Loader />;
  };

  // * Display table based on clicked product category/type
  // eslint-disable-next-line
  const TableRoutes = () => {
    return (
      <>
        {/* Product Form Modal */}
        <ProductForm
          header="Add new product"
          show={modal}
          onHide={() => showModal(false)}
          save={handleClose} // TODO: POST data
          cancel={handleClose}
        />
        {/*  Searchbar */}
        <SearchBar
          modal={() => {
            showModal(true);
          }}
        />
        <Tab.Pane eventKey="default" style={{ paddingTop: '6.7rem' }}>
          <ProductHeader
            _id={products && products._id}
            data={products && products.map((product) => ProductRow(product))}
          />
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
        categories={
          // list `category` data
          products &&
          productCategories.map((product) => (
            <Nav.Item key={product.category}>
              <Nav.Link eventKey={product.category}>
                {product.category}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        types={
          // list `type` data
          productTypes &&
          productTypes.map((product) => (
            <Nav.Item key={product.type}>
              <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
            </Nav.Item>
          ))
        }
        tables={<TableRoutes />}
      />
    </>
  );
}
