/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { useState } from 'react';
import ProductHeader from '../../components/tables/ProductHeader';
import ProductRow from '../../components/tables/ProductRow';
import ProductService from '../../services/ProductService';
import Loader from '../../components/common/Loader';
import { DeleteProduct, EditProduct } from '../modals/ProductModal';

export default function RecentProducts() {
  const [products] = ProductService();
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
        _id={products && products._id}
        data={
          products && products.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            products &&
            products
              .slice(Math.max(products.length - 10, 0))
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
            <Loader />
          )
        }
      />
    </>
  );
}
