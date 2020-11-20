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

import { Button, Col, Form } from 'react-bootstrap';
import Modal from '../common/Modal';
import { Required } from './__forms.module';

export default function UserForm(props) {
  return (
    <Modal
      size="lg"
      header={props.header}
      title={props.title}
      content={
        <Form>
          <Form.Row>
            {/* User desired name */}
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>
                Name <Required>*</Required>
              </Form.Label>
              <Form.Control type="username" placeholder="Username" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>
                Username <Required>*</Required>
              </Form.Label>
              <Form.Control type="username" placeholder="Username" required />
            </Form.Group>

            {/* User Password | Auto-rehash on submit */}
            <Form.Group controlId="formGridDescription">
              <Form.Label>
                Password <Required>*</Required>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            {/* User Role | Human Readable role */}
            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>
                Role <Required>*</Required>
              </Form.Label>
              <Form.Control placeholder="User role" required />
            </Form.Group>

            {/* User Permission | User-level authority */}
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                Permission <Required>*</Required>
              </Form.Label>
              <Form.Control as="select" defaultValue="Choose..." required>
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
