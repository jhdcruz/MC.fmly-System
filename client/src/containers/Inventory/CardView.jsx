/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import SearchControls from '../../components/common/SearchControls';
import Categories from '../../components/Sidebar/Categories';
import { Fallback } from '../../components/common/Loaders';
import Notification from '../../components/common/Notification';
import { ProductCard } from '../../components/Products/Card';
import { ProductsApi } from '../../api/Products';
import { productCategories, productTypes } from './Filters';

// * Lazy imports
const ProductModals = lazy(() => import('./Modals'));

/************************************
 * * Product List | Card View
 ************************************/

export default function CardView(props) {
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
              {data
                .filter((pane) => pane.category === categories.category)
                .map((product) =>
                  ProductCard(product, () => showEditModal(true))
                )}
            </Tab.Pane>
          ))}
        )}
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
              {data
                .filter((pane) => pane.type === types.type)
                .map((product) =>
                  ProductCard(product, () => showEditModal(true))
                )}
            </Tab.Pane>
          ))}
      </>
    );
  };

  // * Display cards based on clicked product category/type
  const InventoryCard = () => {
    return (
      <>
        <Modals />
        {/* Inventory Tab Controls */}
        <SearchControls
          add="Add Product"
          listView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              {data &&
                data.map((product) =>
                  ProductCard(product, () => showEditModal(true))
                )}
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
        content={<InventoryCard />}
      />
      <Notification
        delay={7000}
        title="Notice"
        time="System Admin"
        message="Card view currently has limited functionality compared to List/Table view."
      />
    </>
  );
}
