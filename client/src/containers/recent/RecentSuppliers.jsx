/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback, Loader } from '../../components/common/Loader';
import SupplierHeader from '../../components/tables/SupplierHeader';
import SupplierService from '../../services/SupplierService';

const SupplierRow = lazy(() => import('../../components/tables/SupplierRow'));
const SupplierModals = lazy(() => import('../suppliers/SupplierModals'));

export default function RecentSuppliers() {
  const { data } = SupplierService();

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
      <SupplierHeader
        data={
          data && true ? (
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
          ) : (
            <Fallback />
          )
        }
      />
    </>
  );
}
