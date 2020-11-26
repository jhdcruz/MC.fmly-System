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

import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

export const ModalView = styled(Modal)`
  // Background fade
  background-color: rgba(45, 45, 45, 0.2);
  color: whitesmoke;

  .modal-content {
    border-radius: 1rem;
  }
`;

export const ModalHeader = styled(Modal.Header)`
  background-color: #121416;
  border-bottom: 3px solid #e6a195;

  span {
    color: #ffa090;
  }
`;

export const ModalTitle = styled(Modal.Title)``;

export const ModalBody = styled(Modal.Body)`
  background-color: #19191c;
  padding: 2rem;
`;

export const ModalFooter = styled(Modal.Footer)`
  background-color: #19191c;
  border-top: 3px solid rgb(230, 161, 149) !important;
`;

export default function CustomModal(props) {
  return (
    <ModalView
      {...props}
      size={props.size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          {props.header}
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
      </ModalBody>
      <ModalFooter>{props.footer}</ModalFooter>
    </ModalView>
  );
}
