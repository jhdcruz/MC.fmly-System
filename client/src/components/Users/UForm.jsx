/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomModal from '../common/modals/CustomModal';
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
            <Form.Group className="profile" controlId="formGridName">
              <Form.Label>Profile Picture</Form.Label>
              <Form.File
                type="file"
                name="image"
                id="inputFileControl"
                accept="image/png,image/jpeg"
              />
            </Form.Group>

            <Col>
              <Form.Group controlId="formGridUsername">
                <Form.Label>
                  User ID <Required>*</Required>
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
              <Form.Group controlId="formGridPassword">
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
            </Col>
          </Form.Row>

          <Form.Row>
            {/* User desired name */}
            <Form.Group as={Col} controlId="formGridFName">
              <Form.Label>
                First Name <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                placeholder="John"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                placeholder="Lark"
                autoComplete="new-text"
                autoSave="off"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLName">
              <Form.Label>
                Last Name <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                type="text"
                placeholder="Doe"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* User Role | Human Readable role */}
            <Form.Group as={Col} controlId="formGridPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                className="input-box"
                placeholder="ex. Owner, Accounting"
                autoComplete="new-text"
                autoSave="off"
                required
              />
            </Form.Group>

            {/* User Permission | User-level authority */}
            <Form.Group as={Col} controlId="formGridPerm">
              <Form.Label>
                Permission <Required>*</Required>
              </Form.Label>
              <Form.Control
                className="input-box"
                as="select"
                defaultValue="Choose..."
              >
                <option value="admin">Admin</option>
                <option value="sysadmin">Sysadmin</option>
                <option value="inventory">Inventory</option>
                <option value="cashier">Cashier</option>
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
