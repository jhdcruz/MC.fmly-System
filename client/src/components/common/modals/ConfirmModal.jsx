/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalView } from '../modules/Modals';
import Button from 'react-bootstrap/Button';

export default function ConfirmModal(props) {
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
      <ModalFooter>
        <Button variant="outline-danger" onClick={props.submit}>
          {props.submitText || 'Yes'}
        </Button>
        <Button variant="outline-primary" onClick={props.cancel}>
          {props.cancelText || 'No'}
        </Button>
      </ModalFooter>
    </ModalView>
  );
}
