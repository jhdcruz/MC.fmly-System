/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CustomModal from '../common/CustomModal';
import { ModalForm, Required } from '../common/modules/Forms';
import Button from 'react-bootstrap/Button';
import { FormControl, InputGroup } from 'react-bootstrap';

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
            {/* Transaction Receipt */}
            <Form.Group controlId="formGridReceipt">
              <Form.Label>Receipt</Form.Label>
              <Form.File type="file" name="receipt" id="inputFileControl" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Order ID</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>#</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="input-box"
                  name="order_id"
                  placeholder="Order/Transaction ID"
                  autoComplete="new-text"
                  autoSave="off"
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>

          {/* Transaction Buyer Name */}
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label> <Required>*</Required>
              <Form.Control
                className="input-box"
                name="name"
                placeholder="Buyer's Name"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* Transaction Status */}
            <Form.Group as={Col} controlId="formGridStatus">
              <Form.Label>
                Status <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                as="select"
                defaultValue="Choose..."
                required
              >
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* Transaction Type */}
            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Total Amount</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>₱</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="input-box"
                  type="number"
                  placeholder="Total Amount"
                  autoComplete="new-text"
                  autoSave="off"
                />
              </InputGroup>
            </Form.Group>

            {/* Transaction Payment Method */}
            <Form.Group as={Col} controlId="formGridStatus">
              <Form.Label>
                Payment Method <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                as="select"
                defaultValue="Choose..."
                required
              >
                <option>Cash</option>
                <option>Card</option>
              </Form.Control>
            </Form.Group>

            {/* Transaction Quantity */}
            <Form.Group as={Col} controlId="formGridWebite">
              <Form.Label>Date</Form.Label> <Required>*</Required>
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
