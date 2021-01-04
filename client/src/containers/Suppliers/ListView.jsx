/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback } from '../../components/common/Loaders';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Categories from '../../components/Sidebar/Categories';
import Header from '../../components/Suppliers/table/Header';
import Row from '../../components/Suppliers/table/Row';
import SearchControls from '../../components/common/SearchControls';
import { SuppliersApi } from '../../api/Suppliers';
import { supplierCategories } from './Filters';

const SupplierModals = lazy(() => import('./Modals'));

export default function ListView(props) {
  const { data } = SuppliersApi();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback="">
        <SupplierModals
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

  const SuppliersList = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add Supplier"
          cardView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <Tab.Pane eventKey="default">
            <Header
              data={
                data &&
                data.reverse().map((supplier) =>
                  Row(
                    supplier,
                    () => showEditModal(true),
                    () => showDeleteModal(true)
                  )
                )
              }
            />
          </Tab.Pane>
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
                  hide: 250
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
      content={<SuppliersList />}
    />
  );
}