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

import { Button, Col, Form, FormControl, InputGroup } from 'react-bootstrap';
import Modal from '../common/Modal';
import { Required } from './__forms.module';

export default function ProductForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      header={props.header}
      title={props.title}
      content={
        <Form>
          <Form.Row>
            {/* Product Code (SKU) */}
            <Form.Group as={Col} controlId="formGridCode">
              <Form.Label>
                Code (SKU) <Required>*</Required>
              </Form.Label>
              <Form.Control type="text" placeholder="STC00001" required />
            </Form.Group>

            {/* Product Name */}
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>
                Name <Required>*</Required>
              </Form.Label>
              <Form.Control type="text" placeholder="Heart Sticker" required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* Product Variant */}
            <Form.Group as={Col} controlId="formGridVariant">
              <Form.Label>Variant</Form.Label>
              <Form.Control placeholder="Black" />
            </Form.Group>

            {/* Product Type */}
            <Form.Group as={Col} controlId="formGridType">
              <Form.Label>
                Type <Required>*</Required>
              </Form.Label>
              <Form.Control placeholder="Sticker" required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* Product Category */}
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>
                Category <Required>*</Required>
              </Form.Label>
              <Form.Control placeholder="Papercraft" required />
            </Form.Group>

            {/* Product Quantity */}
            <Form.Group as={Col} controlId="formGridQuantity">
              <Form.Label>
                Quantity <Required>*</Required>
              </Form.Label>
              <Form.Control type="number" placeholder="10" required />
            </Form.Group>

            {/* Product Price */}
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Price</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>₱</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl type="number" />
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
        </Form>
      }
      onHide={props.onHide}
    />
  );
}
