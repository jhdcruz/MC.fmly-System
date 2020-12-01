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

import Button from 'react-bootstrap/Button';
import CustomModal from '../../components/common/CustomModal';
import SupplierForm from '../../components/forms/SupplierForm';

// TODO: API Communication

export const EditSupplier = (props) => {
  return (
    <SupplierForm
      header="Edit supplier"
      show={props.show}
      onHide={props.onHide}
      // TODO: PATCH entry
      submit={props.save}
      cancel={props.close}
    />
  );
};

export const AddSupplier = (props) => {
  return (
    <SupplierForm
      header="Add supplier"
      show={props.show}
      onHide={props.onHide}
      // TODO: POST entry
      submit={props.save}
      cancel={props.close}
    />
  );
};

export const DeleteSupplier = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Remove supplier"
      content="Are you sure?"
      show={props.show}
      onHide={props.onHide}
      footer={
        <>
          {/* TODO: DELETE entry */}
          <Button variant="outline-danger" onClick={props.save}>
            Yes
          </Button>
          <Button variant="outline-primary" onClick={props.close}>
            No
          </Button>
        </>
      }
    />
  );
};