/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import Button from 'react-bootstrap/Button';
import CustomModal from '../../components/common/CustomModal';
import ProductForm from '../../components/forms/ProductForm';

// TODO: API Communication

export const EditProduct = (props) => {
  return (
    <ProductForm
      header="Edit product"
      show={props.show}
      onHide={props.onHide}
      // TODO: PATCH entry
      submit={props.submit}
      cancel={props.cancel}
    />
  );
};

export const AddProduct = (props) => {
  return (
    <ProductForm
      header="Add product"
      show={props.show}
      onHide={props.onHide}
      // TODO: POST entry
      submit={props.submit}
      cancel={props.cancel}
    />
  );
};

export const DeleteProduct = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Remove product"
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
