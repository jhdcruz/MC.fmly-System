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

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const FocusLock = styled(Modal)`
  text-align: center;
  background-color: #222222;
  color: whitesmoke;
  z-index: 9999;
  overflow: hidden !important;
`;

const LockForm = styled.div`
  border-radius: 1.2rem;
`;

const LockHeader = styled(Modal.Header)`
  text-align: center !important;
  background-color: #111111;

  .modal-title {
    margin: 0 auto !important;
  }
`;

const LockBody = styled(Modal.Body)`
  background-color: #111111;

  input {
    background-color: #111111;
    color: whitesmoke;

    ::placeholder {
      color: #c4c4c4;
      font-size: 1.2vw;
    }

    :active,
    :focus {
      font-size: 1.2vw;
      background-color: #1b1e21;
      color: whitesmoke;
    }
  }
`;

const LockFooter = styled(Modal.Footer)`
  background-color: #111111;
`;

function LockModal(props) {
  return (
    <FocusLock
      {...props}
      size="sm"
      backdrop="static"
      keyboard={false}
      aria-labelledby="AppLockModal"
      centered
    >
      <LockForm>
        <LockHeader>
          <Modal.Title id="AppLockModal">App Locked!</Modal.Title>
        </LockHeader>
        <LockBody>
          <Form.Group controlId="UnlockPassword">
            <Form.Label>Enter password to unlock:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </LockBody>
        <LockFooter>
          <Button variant="success">Unlock</Button>
        </LockFooter>
      </LockForm>
    </FocusLock>
  );
}

export default LockModal;
