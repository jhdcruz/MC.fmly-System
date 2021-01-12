/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback } from '../../components/common/Loaders';
import Header from '../../components/Products/table/Header';
import Row from '../../components/Products/table/Row';
import { ProductsApi } from '../../api/Products';

const ProductModals = lazy(() => import('../Inventory/Modals'));

export default function RProducts() {
  const { data } = ProductsApi();

  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback="">
        <ProductModals
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
            data &&
            data
              // Reverse & limit result to 10 | prioritize new entries
              .reverse()
              .slice(Math.max(data.length - 10, 0))
              .map((product) =>
                Row(
                  product,
                  () => showEditModal(true),
                  () => showDeleteModal(true)
                )
              )
          }
        />
      ) : (
        <Fallback />
      )}
    </>
  );
}
