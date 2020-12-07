/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ProductForm from '../../components/forms/ProductForm';
import CustomModal from '../../components/common/CustomModal';
import { ModalForm } from '../../components/forms/__forms.module';

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

export const QuickEdit = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Quick Edit"
      content={
        <ModalForm>
          <Form.Group as={Col} controlId="formGridQuantity">
            <Form.Label>Quantity</Form.Label>
            <InputGroup>
              <InputGroup.Prepend
                style={{
                  fontSize: '1vw'
                }}
              >
                <InputGroup.Text>±</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="input-box"
                type="number"
                autoComplete="new-text"
                autoSave="off"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>₱</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className="input-box"
                type="number"
                autoComplete="new-text"
                autoSave="off"
              />
            </InputGroup>
          </Form.Group>
        </ModalForm>
      }
      show={props.show}
      onHide={props.onHide}
      footer={
        <>
          {/* TODO: DELETE entry */}
          <Button variant="outline-danger" onClick={props.save}>
            Yes
          </Button>
          <Button variant="outline-primary" onClick={props.close}>
            Cancel
          </Button>
        </>
      }
    />
  );
};
