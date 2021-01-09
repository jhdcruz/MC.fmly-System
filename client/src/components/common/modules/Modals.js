/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
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
