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
 * * User Modal Forms
 *******************************/

export default function UForm(props) {
  return (
    <CustomModal
      {...props}
      size="lg"
      header={props.header}
      title={props.title}
      content={
        <ModalForm autoComplete="new-text" autoSave="off">
          <Form.Row>
            {/* User Icon */}
            <Form.Group controlId="formGridName">
              <Form.Label>Profile Picture</Form.Label>
              <Form.File
                type="file"
                name="image"
                id="inputFileControl"
                accept="image/*"
              />
            </Form.Group>

            {/* User desired name */}
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>
                Name <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                placeholder="John Doe"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>
                Username <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="username"
                placeholder="jdoe"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* User Password | Auto-rehash on submit */}
            <Form.Group as={Col} controlId="formGridDescription">
              <Form.Label>
                Password <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="password"
                placeholder="***********"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* User Role | Human Readable role */}
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>
                Role <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                placeholder="Inventory Clerk"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* User Permission | User-level authority */}
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Permission <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                as="select"
                defaultValue="Choose..."
                required
              >
                <option>Admin</option>
                <option>Sysadmin</option>
                <option>Inventory</option>
                <option>Cashier</option>
              </Form.Control>
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
