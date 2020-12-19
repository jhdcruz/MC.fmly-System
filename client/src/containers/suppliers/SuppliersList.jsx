/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import SearchControls from '../../components/SearchControls';
import SupplierHeader from '../../components/tables/SupplierHeader';
import SupplierRow from '../../components/tables/SupplierRow';
import SupplierService from '../../services/SupplierService';
import { Fallback } from '../../components/common/Loader';
import { AddSupplier, DeleteSupplier, EditSupplier } from './SupplierModals';

export default function SuppliersList(props) {
  const { data } = SupplierService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
        <AddSupplier
          show={addModal}
          onHide={() => showEditModal(false)}
          save={() => showEditModal(false)}
          close={() => showEditModal(false)}
        />
        <EditSupplier
          show={editModal}
          onHide={() => showEditModal(false)}
          save={() => showEditModal(false)}
          close={() => showEditModal(false)}
        />
        <DeleteSupplier
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          save={() => showDeleteModal(false)}
          close={() => showDeleteModal(false)}
        />
      </>
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
