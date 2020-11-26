/*
 *     MC.fmly Inventory System
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
import SearchBar from '../components/common/SearchBar';
import SupplierForm from '../components/forms/SupplierForm';
import SupplierService from '../services/SupplierService';
import Loader from '../components/common/Loader';

export default function Suppliers() {
  const [suppliers] = SupplierService();

  // * Modal Handlers
  const [modal, showModal] = useState(false);
  const handleClose = () => showModal(false);

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
      {/* Modal */}
      <SupplierForm
        header="Add new supplier"
        show={modal}
        onHide={() => showModal(false)}
        save={handleClose} // TODO: POST data
        cancel={handleClose}
      />

      <SearchBar
        modal={() => {
          showModal(true);
        }}
      />
      {/* Supplier group */}
      <CardDeck
        style={{
          margin: '5rem 0.5rem 1rem',
          padding: '1rem',
          overflow: 'auto'
        }}
      >
        <SuppliersList />
      </CardDeck>
    </div>
  );
}
