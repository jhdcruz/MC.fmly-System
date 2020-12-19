/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import ProductHeader from '../../components/tables/ProductHeader';
import ProductRow from '../../components/tables/ProductRow';
import { Fallback } from '../../components/common/Loader';
import ProductService from '../../services/ProductService';
import { DeleteProduct, EditProduct } from '../inventory/ProductModals';

export default function RecentProducts() {
  const { data } = ProductService();
  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
        <EditProduct
          show={editModal}
          onHide={() => showEditModal(false)}
          save={() => showEditModal(false)}
          close={() => showEditModal(false)}
        />
        <DeleteProduct
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
      <ProductHeader
        data={
          data && data.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            data &&
            data
              .slice(Math.max(data.length - 10, 0))
              .reverse()
              .map((product) => (
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
              ))
          ) : (
            <Fallback />
          )
        }
      />
    </>
  );
}
