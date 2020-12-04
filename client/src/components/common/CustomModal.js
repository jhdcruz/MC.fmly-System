/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

/********************************
 * * Cutomizable/Reusable Modal
 ********************************/

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
