/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback, Loader } from '../../components/common/Loader';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import SearchControls from '../../components/common/SearchControls';
import Categories from '../../components/Sidebar/Categories';
import ResetScroll from '../../components/common/ResetScroll';
import { supplierCategories } from './Filters';
import { SuppliersApi } from '../../api/Suppliers';

const Poster = lazy(() => import('../../components/Suppliers/Poster'));
const SupplierModals = lazy(() => import('./Modals'));

export default function CardView(props) {
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

  const PosterCard = (supplier) => {
    return (
      <Suspense fallback={<Loader />}>
        <Poster
          key={supplier._id}
          delete={() => showDeleteModal(true)}
          edit={() => showEditModal(true)}
          icon={supplier.icon}
          name={supplier.name}
          description={supplier.description}
          category={supplier.category}
          address={supplier.address}
          website={supplier.website}
          contact={supplier.contact}
        />
      </Suspense>
    );
  };

  // * Filter suppliers by category
  const CategoryFilter = () => {
    return (
      <>
        {data &&
          supplierCategories(data).map((supplier) => (
            <>
              {supplier.category.map((category) => (
                <Tab.Pane key={category} eventKey={category}>
                  <ResetScroll />
                  {data
                    .filter((pane) => pane === category)
                    .map((suppliers) => PosterCard(suppliers))
                    .reverse()}
                </Tab.Pane>
              ))}
            </>
          ))}
      </>
    );
  };

  const SupplierCard = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add Supplier"
          listView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            <ResetScroll />
            <Tab.Pane eventKey="default">
              {data && data.map((supplier) => PosterCard(supplier)).reverse()}
            </Tab.Pane>
            <CategoryFilter />
          </>
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
      content={<SupplierCard />}
    />
  );
}
