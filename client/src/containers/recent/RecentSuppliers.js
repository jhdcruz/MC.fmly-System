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
import SupplierHeader from '../../components/tables/SupplierHeader';
import SupplierService from '../../services/SupplierService';
import Loader from '../../components/common/Loader';
import { DeleteSupplier, EditSupplier } from '../modals/SupplierModal';
import SupplierRow from '../../components/tables/SupplierRow';

export default function RecentSuppliers() {
  const [suppliers] = SupplierService();

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
        _id={suppliers && suppliers._id}
        data={
          suppliers && suppliers.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            suppliers &&
            suppliers
              .slice(Math.max(suppliers.length - 10, 0))
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
