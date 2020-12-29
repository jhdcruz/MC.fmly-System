/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Categories from '../../components/sidebar/Categories';
import ProductHeader from '../../components/tables/ProductHeader';
import SearchControls from '../../components/SearchControls';
import ResetScroll from '../../components/ResetScroll';
import { Fallback, Loader } from '../../components/common/Loader';
import { productCategories, productTypes } from './ProductFilters';
import ProductService from '../../services/ProductService';

const ProductRow = lazy(() => import('../../components/tables/ProductRow'));
const ProductModals = lazy(() => import('./ProductModals'));

/******************************************
 * * Product Inventory
 ******************************************/

export default function ProductsList(props) {
  const { data } = ProductService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback="">
        <ProductModals
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          addCancel={() => showAddModal(false)}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          editCancel={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          deleteCancel={() => showDeleteModal(false)}
        />
      </Suspense>
    );
  };

  const ProductTable = (product) => {
    return (
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    );
  };

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      <>
        {data &&
          productCategories(data).map((categories) => (
            <Tab.Pane key={categories.category} eventKey={categories.category}>
              <ResetScroll />
              <ProductHeader
                map={data && data._id}
                data={
                  data &&
                  data
                    .filter((pane) => pane.category === categories.category)
                    .map((product) => ProductTable(product))
                }
              />
            </Tab.Pane>
          ))}
      </>
    );
  };

  // * Filter products by types
  const TypeFilter = () => {
    return (
      <>
        {data &&
          productTypes(data).map((types) => (
            <Tab.Pane key={types.type} eventKey={types.type}>
              <ResetScroll />
              <ProductHeader
                _id={data && data._id}
                data={data
                  .filter((pane) => pane.type === types.type)
                  .map((product) => ProductTable(product))}
              />
            </Tab.Pane>
          ))}
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
          cardView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              <ResetScroll />
              <ProductHeader
                _id={data && data._id}
                data={data && data.map((product) => ProductTable(product))}
              />
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
      content={<Products />}
    />
  );
}
