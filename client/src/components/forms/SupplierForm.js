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

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import CustomModal from '../common/CustomModal';
import { ModalForm, Required } from './__forms.module';

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
            {/* Supplier Icon */}
            <Form.Group controlId="formGridName">
              <Form.Label>Logo</Form.Label>
              <Form.File
                type="file"
                name="logo"
                id="inputFileControl"
                accept="image/*"
              />
            </Form.Group>

            {/* Supplier Name */}
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

          {/* Supplier Description */}
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
            {/* Product Category */}
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
          </Form.Row>

          <Form.Row>
            {/* Product Type */}
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>
                Type <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                placeholder="It supplies..."
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* Product Quantity */}
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

            {/* Product Price */}
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
              variant="outline-danger float-right"
              type="button"
              onClick={props.cancel}
            >
              Cancel
            </Button>
            <Button
              variant="outline-primary float-right"
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
