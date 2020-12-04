/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Categories from '../components/sidebar/Categories';
import ProductHeader from '../components/tables/ProductHeader';
import ProductRow from '../components/tables/ProductRow';
import { AddProduct, DeleteProduct, EditProduct } from './modals/ProductModal';
import ProductService from '../services/ProductService';
import SearchControls from '../components/SearchControls';
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
          submit={() => showAddModal(false)}
          cancel={() => showAddModal(false)}
        />
        <EditProduct
          show={editModal}
          onHide={() => showEditModal(false)}
          submit={() => showEditModal(false)}
          cancel={() => showEditModal(false)}
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

  const ProductTable = (product) => {
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
                  {/* TODO: Prevent header re-render */}
                  <ProductHeader
                    map={products && products._id}
                    data={
                      products &&
                      products
                        .filter((pane) => pane.category === categories.category)
                        .map((product) => ProductTable(product))
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
                      .map((product) => ProductTable(product))}
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
  const Products = () => {
    return (
      <>
        <Modals />
        {/* Inventory Tab Controls */}
        <SearchControls
          add="Add Product"
          list="List View"
          card="Card View"
          modal={() => showAddModal(true)}
        />

        {/* Filtered Tables */}
        <Tab.Pane eventKey="default">
          <ProductHeader
            _id={products && products._id}
            data={products && products.map((product) => ProductTable(product))}
          />
        </Tab.Pane>
        <CategoryFilter />
        <TypeFilter />
      </>
    );
  };

  return (
    <Categories
      main="Categories"
      mainTabs={
        products &&
        productCategories.map((product) => (
          <Nav.Item key={product.category}>
            <Nav.Link eventKey={product.category}>{product.category}</Nav.Link>
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
      content={<Products />}
    />
  );
}
