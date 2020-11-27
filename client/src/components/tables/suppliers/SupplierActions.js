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
import Button from 'react-bootstrap/Button';
import CustomModal from '../../common/CustomModal';
import { RowButtons, RowControls } from '../__tables.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import SupplierForm from '../../forms/SupplierForm';

export default function SupplierActions() {
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const editModalClose = () => showEditModal(false);
  const deleteModalClose = () => showDeleteModal(false);

  const Modals = () => {
    return (
      <>
        {/* DELETE Modal */}
        <CustomModal
          size="sm"
          header="Delete supplier"
          content="Are you sure?"
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          footer={
            <>
              <Button variant="outline-danger" onClick={deleteModalClose}>
                Yes
              </Button>
              <Button variant="outline-primary" onClick={deleteModalClose}>
                No
              </Button>
            </>
          }
          style={{
            textAlign: 'center'
          }}
        />

        {/* EDIT Modal */}
        <SupplierForm
          header="Edit supplier"
          show={editModal}
          onHide={() => showEditModal(false)}
          submit={editModalClose} // TODO: PUT/PATCH data
          cancel={editModalClose}
        />
      </>
    );
  };

  return (
    <span className="actions">
      <Modals />
      <RowButtons>
        {/* Modal Action Icons */}
        <RowControls
          variant="outline-danger"
          onClick={() => showDeleteModal(true)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </RowControls>
        <RowControls
          variant="outline-success"
          onClick={() => showEditModal(true)}
        >
          <FontAwesomeIcon icon={faPen} />
        </RowControls>
      </RowButtons>
    </span>
  );
}
