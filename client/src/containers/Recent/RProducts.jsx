/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback, Loader } from '../../components/common/Loader';
import Header from '../../components/Products/table/Header';
import { ProductsApi } from '../../api/Products';

const ProductRow = lazy(() => import('../../components/Products/table/Row'));
const ProductModals = lazy(() => import('../Inventory/Modals'));

export default function RProducts() {
  const { data } = ProductsApi();

  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback={<Loader />}>
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
            // Reverse & limit result to 10 | prioritize new entries
            data &&
            data
              .slice(Math.max(data.length - 10, 0))
              .reverse()
              .map((product) => (
                <Suspense fallback={<Loader />}>
                  <ProductRow
                    delete={() => showDeleteModal(true)}
                    edit={() => showEditModal(true)}
                    _id={product._id}
                    code={product.code}
                    name={product.name}
                    variant={product.variant}
                    type={product.type}
                    category={product.category}
                    quantity={product.quantity}
                    updatedAt={product.updatedAt}
                    createdAt={product.createdAt}
                    price={product.price}
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
