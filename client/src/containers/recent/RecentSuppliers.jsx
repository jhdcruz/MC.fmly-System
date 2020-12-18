/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import SupplierHeader from '../../components/tables/SupplierHeader';
import SupplierService from '../../services/SupplierService';
import { Loader } from '../../components/common/Loader';
import { DeleteSupplier, EditSupplier } from '../suppliers/SupplierModals';
import SupplierRow from '../../components/tables/SupplierRow';

export default function RecentSuppliers() {
  const { data } = SupplierService();

  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
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
      <SupplierHeader
        data={
          data && data.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            data &&
            data
              .slice(Math.max(data.length - 10, 0))
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
            <Loader />
          )
        }
      />
    </>
  );
}
