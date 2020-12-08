/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import SupplierService from '../../services/SupplierService';
import SearchControls from '../../components/SearchControls';
import Loader from '../../components/common/Loader';
import Poster from '../../components/cards/Poster';
import {
  AddSupplier,
  DeleteSupplier,
  EditSupplier
} from './SupplierModal';

// TODO: Add Categories by types
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
        add="Add Supplier"
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
