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
import CardDeck from 'react-bootstrap/CardDeck';
import SupplierService from '../services/SupplierService';
import SearchControls from '../components/SearchControls';
import Loader from '../components/common/Loader';
import Poster from '../components/cards/Poster';
import {
  AddSupplier,
  DeleteSupplier,
  EditSupplier
} from './modals/SupplierModal';

export default function SuppliersCard() {
  const [suppliers] = SupplierService();

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
          onHide={() => showAddModal(false)}
          submit={() => showAddModal(false)}
          cancel={() => showAddModal(false)}
        />
        <EditSupplier
          show={editModal}
          onHide={() => showEditModal(false)}
          submit={() => showEditModal(false)}
          cancel={() => showEditModal(false)}
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
    <div className="overflow-auto pt-5">
      <Modals />
      <SearchControls
        add="Add Product"
        list="List View"
        card="Card View"
        modal={() => showAddModal(true)}
      />
      {/* Supplier group */}
      <CardDeck
        style={{
          margin: '0 0.5rem 1rem',
          padding: '1rem',
          overflow: 'auto'
        }}
      >
        {/* Render <Loading /> while fetching suppliers */}
        {suppliers && true ? (
          <>
            {suppliers &&
              suppliers
                .map((supplier) => (
                  <Poster
                    key={supplier._id}
                    delete={() => showDeleteModal(true)}
                    edit={() => showEditModal(true)}
                    icon={supplier.icon}
                    name={supplier.name}
                    description={supplier.description}
                    type={supplier.type}
                    address={supplier.address}
                    website={supplier.website}
                    contact={supplier.contact}
                  />
                ))
                .reverse()}
          </>
        ) : (
          <Loader />
        )}
      </CardDeck>
    </div>
  );
}
