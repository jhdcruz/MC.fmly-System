/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
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
      submit={props.submit}
      cancel={props.cancel}
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
      submit={props.submit}
      cancel={props.cancel}
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
