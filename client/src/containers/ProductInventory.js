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
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Categories from '../components/Categories';
import ProductHeader from '../components/tables/ProductHeader';
import ProductRow from '../components/tables/ProductRow';
import { AddProduct, DeleteProduct, EditProduct } from './modals/ProductModal';
import ProductService from '../services/ProductService';
import Controls from '../components/Controls';
import Loader from '../components/common/Loader';

/******************************************
 * * Product Inventory
 * TODO: Extract filters for reusability
 ******************************************/

export default function ProductInventory() {
  const [products] = ProductService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
        <AddProduct
          show={addModal}
          onHide={() => showAddModal(false)}
          save={() => showAddModal(false)}
          close={() => showAddModal(false)}
        />
        <EditProduct
          show={editModal}
          onHide={() => showEditModal(false)}
          save={() => showEditModal(false)}
          close={() => showEditModal(false)}
        />
        <DeleteProduct
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          save={() => showDeleteModal(false)}
          close={() => showDeleteModal(false)}
        />
      </>
    );
  };

  const ProductList = (product) => {
    return (
      <ProductRow
        edit={() => showEditModal(true)}
        delete={() => showDeleteModal(true)}
        _id={product._id}
        code={product.code}
        name={product.name}
        variant={product.variant}
        type={product.type}
        category={product.category}
        quantity={product.quantity}
        updatedAt={product.updatedAt}
        createdAt={product.createdAt}
        price={product.price}
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
                  <ProductHeader
                    map={products && products._id}
                    data={
                      products &&
                      products
                        .filter((pane) => pane.category === categories.category)
                        .map((product) => ProductList(product))
                    }
                  />
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
                  <ProductHeader
                    _id={products && products._id}
                    data={products
                      .filter((pane) => pane.type === types.type)
                      .map((product) => ProductList(product))}
                  />
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  // * Display table based on clicked product category/type
  const TableRoutes = () => {
    return (
      <>
        <Modals />
        {/* Inventory Tab Controls */}
        <Controls modal={() => showAddModal(true)} />

        {/* Filtered Tables */}
        <Tab.Pane eventKey="default">
          <ProductHeader
            _id={products && products._id}
            data={products && products.map((product) => ProductList(product))}
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
        content={<TableRoutes />}
      />
    </>
  );
}
