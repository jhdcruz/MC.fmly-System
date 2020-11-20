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
import { CardDeck, Dropdown } from 'react-bootstrap';
import Poster from '../components/Poster';
import SearchBar from '../components/common/SearchBar';
import SupplierForm from '../components/forms/SupplierForm';
import suppliers from '../__mocks__/suppliers.json';

export default function Suppliers() {
  // const [suppliers] = useSuppliers();

  // * Modal Handlers
  const [modal, showModal] = useState(false);
  const handleClose = () => showModal(false);

  return (
    <div
      style={{
        width: '100%:',
        height: '100vh'
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

      {/* Modal Handler */}
      <SearchBar
        modal={() => {
          showModal(true);
        }}
        filter={
          <>
            {/* Filter Types */}
            <Dropdown.Item href="#">Name</Dropdown.Item>
            <Dropdown.Item href="#">Type</Dropdown.Item>
          </>
        }
      />
      <CardDeck
        style={{
          margin: '4.5rem 0 1rem',
          padding: '1rem'
        }}
      >
        {suppliers
          .map((supplier) => (
            <Poster
              icon={supplier.icon}
              name={supplier.name}
              description={supplier.description}
              type={supplier.type}
              address={supplier.address}
              website={supplier.website}
              contact={supplier.contact}
            />
          ))
          .sort()}
      </CardDeck>
    </div>
  );
}
