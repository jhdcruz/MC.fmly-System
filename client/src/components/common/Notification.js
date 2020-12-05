/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import styled from 'styled-components';
import Toast from 'react-bootstrap/Toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

/************************
 * * Toast Notification
 ************************/

const Notice = styled(Toast)`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem 0.5rem;
  background-color: #1b1a1d !important;
  color: whitesmoke;
  width: auto;
  z-index: 99;

  svg {
    color: whitesmoke;
  }

  strong {
    font-weight: bold;
    color: whitesmoke;
  }

  small {
    font-weight: bold;
    color: whitesmoke;
  }

  .close {
    color: whitesmoke;
  }

  .toast-header {
    background-color: #121416;
  }
`;

export default function Notification(props) {
  const [show, setShow] = useState(true);

  return (
    <Notice
      onClose={() => setShow(false)}
      show={show}
      delay={props.delay}
      animation={true}
      autohide
    >
      <Notice.Header>
        <FontAwesomeIcon icon={faBell} className="mr-2" />
        <strong className="mr-auto">{props.title}</strong>
        <small>{props.time}</small>
      </Notice.Header>
      <Notice.Body>{props.message}</Notice.Body>
    </Notice>
  );
}
