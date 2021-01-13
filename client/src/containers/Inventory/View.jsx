/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Fallback } from '../../components/common/Loaders';
import Categories from '../../components/Sidebar/Categories';
import SearchControls from '../../components/common/SearchControls';
import Notification from '../../components/common/Notification';
import ViewAll from './ViewAll';
import ViewCategory from './ViewCategory';
import ViewType from './ViewType';
import { ProductsApi } from '../../api/Products';
import { productCategories, productTypes } from './Filters';
import { SuppliersApi } from '../../api/Suppliers';

const ProductModals = lazy(() => import('./Modals'));

/******************************************
 * * Product Inventory
 ******************************************/

export default function View() {
  const { data: products } = ProductsApi();
  const { data: suppliers } = SuppliersApi();

  const [view, setView] = useState('list');
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [bDeleteModal, showBDeleteModal] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback="">
        <ProductModals
          suppliers={suppliers}
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          bDeleteModal={bDeleteModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          editCancel={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          bDeleteHide={() => showBDeleteModal(false)}
          bDeleteSubmit={() => showBDeleteModal(false)}
        />
      </Suspense>
    );
  };

  const InventoryView = () => {
    return (
      <>
        <Modals />
        <SearchControls
          listView={() => setView('list')}
          cardView={() => setView('card')}
          addModal={() => showAddModal(true)}
          bulkDelete={() => showBDeleteModal(true)}
        />

        {products && true ? (
          <>
            {/* Display table based on clicked product category/type */}
            <ViewAll
              data={products}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
            />
            <ViewCategory
              data={products}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
            />
            <ViewType
              data={products}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
            />
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
          products &&
          productCategories(products).map((product) => (
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
          productTypes(products).map((product) => (
            <Nav.Item key={product.type}>
              <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
            </Nav.Item>
          ))
        }
        content={<InventoryView />}
      />
      <Notification
        delay={10000}
        title="Guide"
        message={
          <p>
            Scroll horizontally using <kbd>Shift</kbd> + <kbd>Scroll</kbd>,
            middle-mouse button, or arrow keys.
          </p>
        }
      />
    </>
  );
}
