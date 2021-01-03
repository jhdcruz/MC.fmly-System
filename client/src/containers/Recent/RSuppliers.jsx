/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback, Loader } from '../../components/common/Loaders';
import Header from '../../components/Suppliers/table/Header';
import { SuppliersApi } from '../../api/Suppliers';

const SupplierRow = lazy(() =>
  import('../../components/Suppliers/table/Row')
);
const SupplierModals = lazy(() => import('../Suppliers/Modals'));

export default function RSuppliers() {
  const { data } = SuppliersApi();

  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback={<Loader />}>
        <SupplierModals
          editModal={editModal}
          deleteModal={deleteModal}
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
      {data && true ? (
        <Header
          data={
            // Reverse & limit result to 10 | prioritize new entries
            data &&
            data
              .slice(Math.max(data.length - 10, 0))
              .reverse()
              .map((supplier) => (
                <Suspense fallback={<Loader />}>
                  <SupplierRow
                    delete={() => showDeleteModal(true)}
                    edit={() => showEditModal(true)}
                    key={supplier._id}
                    icon={supplier.icon}
                    name={supplier.name}
                    description={supplier.description}
                    category={supplier.category}
                    address={supplier.address}
                    website={supplier.website}
                    contact={supplier.contact}
                  />
                </Suspense>
              ))
          }
        />
      ) : (
        <Fallback />
      )}
    </>
  );
}
