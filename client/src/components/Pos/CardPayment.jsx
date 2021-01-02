/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomModal from '../common/CustomModal';
import { ModalForm, Required } from '../common/modules/Forms';

/*******************************
 * * Card Payment Modal Form
 *******************************/

export default function CardPayment(props) {
  return (
    <CustomModal
      {...props}
      size="lg"
      header={props.header}
      title={props.title}
      content={
        <ModalForm autoComplete="new-text" autoSave="off">
          <Form.Group as={Col} controlId="formGridCode">
            <Form.Label>
              Card # <Required>*</Required>
            </Form.Label>
            <Form.Control
              className="input-box"
              type="password"
              placeholder="Credit/Debit #"
              autoComplete="new-text"
              autoSave="off"
              required
            />

            <Form.Row>
              {/* Product Name */}
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>
                  Expiry Date <Required>*</Required>
                </Form.Label>
                <Form.Control
                  className="input-box"
                  type="text"
                  placeholder="Heart Sticker"
                  autoComplete="new-text"
                  autoSave="off"
                  required
                />
              </Form.Group>

              {/* Product Variant */}
              <Form.Group as={Col} controlId="formGridVariant">
                <Form.Label>CVV/CVV2</Form.Label>
                <Form.Control
                  className="input-box"
                  type="password"
                  placeholder="000"
                  autoComplete="new-text"
                  autoSave="off"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              {/* Product Type */}
              <Form.Group as={Col} controlId="formGridType">
                <Form.Label>
                  Cardholder's Name <Required>*</Required>
                </Form.Label>
                <Form.Control
                  className="input-box"
                  placeholder="Sticker"
                  autoComplete="new-text"
                  autoSave="off"
                  required
                />
              </Form.Group>

              {/* Product Category */}
              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>
                  Billing Address <Required>*</Required>
                </Form.Label>
                <Form.Control
                  className="input-box"
                  type="textarea"
                  placeholder="Drag on the lower-right corner to expand..."
                  autoComplete="new-text"
                  autoSave="off"
                  required
                />
              </Form.Group>
            </Form.Row>
          </Form.Group>

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
              Pay
            </Button>
          </Form.Group>
        </ModalForm>
      }
      onHide={props.onHide}
    />
  );
}
