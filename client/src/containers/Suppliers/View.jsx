/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback } from '../../components/common/Loaders';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Categories from '../../components/Sidebar/Categories';
import SearchControls from '../../components/common/SearchControls';
import { SuppliersApi } from '../../api/Suppliers';
import { supplierCategories } from './Filters';
import ViewAll from './ViewAll';

const SupplierModals = lazy(() => import('./Modals'));

export default function View(props) {
  const { data } = SuppliersApi();
  const [view, setView] = useState('card');

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [bDeleteModal, showBDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback="">
        <SupplierModals
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          bDeleteModal={bDeleteModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          bDeleteHide={() => showBDeleteModal(false)}
          bDeleteSubmit={() => showBDeleteModal(false)}
        />
      </Suspense>
    );
  };

  const SuppliersView = () => {
    return (
      <>
        <Modals />
        <SearchControls
          listView={() => setView('list')}
          cardView={() => setView('card')}
          addModal={() => showAddModal(true)}
          bulkDelete={() => showBDeleteModal(true)}
        />

        {data && true ? (
          <ViewAll
            data={data && data}
            view={view}
            edit={() => showEditModal(true)}
            del={() => showDeleteModal(true)}
          />
        ) : (
          <Fallback />
        )}
      </>
    );
  };

  return (
    <Categories
      main="Tags"
      mainTabs={
        data &&
        supplierCategories(data).map((supplier) => (
          <>
            {supplier.category.map((category) => (
              <OverlayTrigger
                placement="right"
                delay={{
                  show: 500,
                  hide: 150
                }}
                overlay={
                  <Tooltip id="button-tooltip" {...props}>
                    {category}
                  </Tooltip>
                }
              >
                <Nav.Item key={category}>
                  <Nav.Link eventKey={category}>{category}</Nav.Link>
                </Nav.Item>
              </OverlayTrigger>
            ))}
          </>
        ))
      }
      content={<SuppliersView />}
    />
  );
}
