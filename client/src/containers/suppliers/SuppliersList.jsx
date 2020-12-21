/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import SearchControls from '../../components/SearchControls';
import SupplierHeader from '../../components/tables/SupplierHeader';
import SupplierRow from '../../components/tables/SupplierRow';
import SupplierService from '../../services/SupplierService';
import { Fallback, Loader } from '../../components/common/Loader';

const SupplierModals = lazy(() => import('./SupplierModals'));

export default function SuppliersList(props) {
  const { data } = SupplierService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback={<Loader />}>
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

  return (
    <>
      <Modals />
      <SearchControls
        add="Add Transaction"
        cardView={props.view}
        modal={() => showAddModal(true)}
      />

      <Tab.Pane>
        <SupplierHeader
          data={
            data && data.length !== null ? (
              data &&
              data
                .reverse()
                .map((supplier) => (
                  <SupplierRow
                    delete={() => showDeleteModal(true)}
                    edit={() => showEditModal(true)}
                    key={supplier._id}
                    icon={supplier.icon}
                    name={supplier.name}
                    description={supplier.description}
                    type={supplier.type}
                    address={supplier.address}
                    website={supplier.website}
                    contact={supplier.contact}
                  />
                ))
            ) : (
              <Fallback />
            )
          }
        />
      </Tab.Pane>
    </>
  );
}
