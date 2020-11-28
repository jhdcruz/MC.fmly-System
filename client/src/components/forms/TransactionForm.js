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

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import CustomModal from '../common/CustomModal';
import { ModalForm, Required } from './__forms.module';

/*******************************
 * * Transactions Modal Form
 *******************************/

export default function TransactionForm(props) {
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
              <Form.Label>Receipt</Form.Label>
              <Form.File type="file" name="receipt" id="inputFileControl" />
            </Form.Group>

            {/* Supplier Name */}
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>
                Order ID <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                name="order_id"
                placeholder="Order/Transaction ID"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
          </Form.Row>

          {/* Supplier Description */}
          <Form.Group controlId="formGridDescription">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="input-box"
              as="textarea"
              name="name"
              placeholder="Buyer's Name"
              autoComplete="new-text"
              autoSave="off"
            />
          </Form.Group>

          <Form.Row>
            {/* Product Category */}
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Status</Form.Label>
              <Form.Control
                className="input-box"
                name="status"
                as="textarea"
                placeholder="Order status"
                autoComplete="new-text"
                autoSave="off"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* Product Type */}
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>
                Total <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                name="total"
                placeholder="Total amount"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* Product Quantity */}
            <Form.Group as={Col} controlId="formGridWebite">
              <Form.Label>Date</Form.Label>
              <InputGroup>
                <FormControl
                  className="input-box"
                  type="date"
                  name="date"
                  autoComplete="new-text"
                  autoSave="off"
                />
              </InputGroup>
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
