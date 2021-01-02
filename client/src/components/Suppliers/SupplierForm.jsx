/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import CustomModal from '../common/CustomModal';
import { ModalForm, Required } from '../common/modules/Forms';

/*******************************
 * * Supplier Modal Form
 *******************************/

export default function SupplierForm(props) {
  return (
    <CustomModal
      {...props}
      size="lg"
      header={props.header}
      title={props.title}
      content={
        <ModalForm autoComplete="new-text" autoSave="off">
          <Form.Row>
            <Form.Group controlId="formGridLogo">
              <Form.Label>Logo</Form.Label>
              <Form.File
                type="file"
                name="logo"
                id="inputFileControl"
                accept="image/*"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>
                Name <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                placeholder="Company/Supplier name"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              className="input-box"
              as="textarea"
              placeholder="Brief info about the company... (drag on the lower right to expand)"
              autoComplete="new-text"
              autoSave="off"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Address</Form.Label>
              <Form.Control
                className="input-box"
                as="textarea"
                placeholder="Supplier physical address... (drag on the lower right to expand)"
                autoComplete="new-text"
                autoSave="off"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>
                Type <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                as="textarea"
                placeholder="It supplies... (drag on the lower right to expand)"
                autoComplete="new-text"
                autoSave="off"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridWebite">
              <Form.Label>Website</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">https://</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="input-box"
                  placeholder="sample.com"
                  autoComplete="new-text"
                  autoSave="off"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridContact">
              <Form.Label>Contact</Form.Label>
              <FormControl
                className="input-box"
                type="tel"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="ex: 123-45-678"
                autoComplete="new-text"
                autoSave="off"
              />
            </Form.Group>
          </Form.Row>

          {/* Modal Actions */}
          <Form.Group>
            <Button
              variant="outline-primary float-right"
              type="button"
              onClick={props.cancel}
            >
              Cancel
            </Button>
            <Button
              variant="outline-danger float-right"
              type="submit"
              onClick={props.submit}
            >
              Save
            </Button>
          </Form.Group>
        </ModalForm>
      }
      onHide={props.onHide}
    />
  );
}
