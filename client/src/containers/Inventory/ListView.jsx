/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Categories from '../../components/Sidebar/Categories';
import Header from '../../components/Products/table/Header';
import Row from '../../components/Products/table/Row';
import SearchControls from '../../components/common/SearchControls';
import { Fallback } from '../../components/common/Loader';
import { ProductsApi } from '../../api/Products';
import { productCategories, productTypes } from './Filters';

const ProductModals = lazy(() => import('./Modals'));

/******************************************
 * * Product Inventory
 ******************************************/

export default function ListView(props) {
  const { data } = ProductsApi();

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

  // * Filter products by category
  const CategoryFilter = () => {
    return (
      <>
        {data &&
          productCategories(data).map((categories) => (
            <Tab.Pane key={categories.category} eventKey={categories.category}>
              <Header
                map={data && data._id}
                data={
                  data &&
                  data
                    .filter((pane) => pane.category === categories.category)
                    .map((product) =>
                      Row(
                        product,
                        () => showEditModal(true),
                        () => showDeleteModal(true)
                      )
                    )
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
              <Header
                _id={data && data._id}
                data={data
                  .filter((pane) => pane.type === types.type)
                  .map((product) =>
                    Row(
                      product,
                      () => showEditModal(true),
                      () => showDeleteModal(true)
                    )
                  )}
              />
            </Tab.Pane>
          ))}
      </>
    );
  };

  const InventoryList = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add Product"
          cardView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            {/* Display table based on clicked product category/type */}
            <Tab.Pane eventKey="default">
              <Header
                _id={data && data._id}
                data={
                  data &&
                  data.map((product) =>
                    Row(
                      product,
                      () => showEditModal(true),
                      () => showDeleteModal(true)
                    )
                  )
                }
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
      content={<InventoryList />}
    />
  );
}
