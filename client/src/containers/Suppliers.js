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
import Poster from '../components/Poster';
import SupplierService from '../services/SupplierService';
import Controls from '../components/common/Controls';
import Loader from '../components/common/Loader';
import CustomModal from '../components/common/CustomModal';
import Button from 'react-bootstrap/Button';
import SupplierForm from '../components/forms/SupplierForm';

export default function Suppliers() {
  const [suppliers] = SupplierService();

  // * Modal Handlers
  const [addModal, showAddModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const closeAddModal = () => showAddModal(false);
  const closeDeleteModal = () => showDeleteModal(false);

  const Modals = () => {
    return (
      <>
        <CustomModal
          size="sm"
          header="Remove supplier"
          content="Are you sure?"
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          footer={
            <>
              <Button variant="outline-danger" onClick={closeDeleteModal}>
                Yes
              </Button>
              <Button variant="outline-primary" onClick={closeDeleteModal}>
                No
              </Button>
            </>
          }
          style={{
            textAlign: 'center'
          }}
        />
        <SupplierForm
          header="Add new supplier"
          show={addModal}
          onHide={() => showAddModal(false)}
          save={closeAddModal}
          cancel={closeAddModal}
        />
      </>
    );
  };

  const SuppliersList = () => {
    // Wait for suppliers list | loader
    if (suppliers && suppliers.length !== null) {
      return (
        <>
          {suppliers &&
            suppliers
              .map((supplier) => (
                <Poster
                  key={supplier._id}
                  delete={() => showDeleteModal(true)}
                  edit={() => showAddModal(true)}
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
      );
    }
    return <Loader />;
  };

  return (
    <div
      style={{
        overflow: 'auto'
      }}
    >
      <Modals />
      <Controls title="Add Supplier" modal={() => showAddModal(true)} />
      {/* Supplier group */}
      <CardDeck
        style={{
          margin: '0 0.5rem 1rem',
          padding: '1rem',
          overflow: 'auto'
        }}
      >
        <SuppliersList />
      </CardDeck>
    </div>
  );
}
