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

import { FC, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import styled from 'styled-components';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = styled(Toast)`
  position: fixed !important;
  bottom: 1rem;
  right: 0;
  margin: 1rem 0.5rem;
  background-color: #1f252c !important;
  color: whitesmoke;
  width: auto;

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
    background-color: #1b1e21;
  }
`;

type NotifProps = {
  delay: number;
  title: string;
  time?: string;
  message: string;
};

const Notification: FC<NotifProps> = ({ delay, title, time, message }) => {
  const [show, setShow] = useState(true);

  return (
    <Alert
      onClose={() => setShow(false)}
      show={show}
      delay={delay}
      animation={true}
      autohide
    >
      <Alert.Header>
        <FontAwesomeIcon icon={faBell} className="mr-2" />
        <strong className="mr-auto">{title}</strong>
        <small>{time}</small>
      </Alert.Header>
      <Alert.Body>{message}</Alert.Body>
    </Alert>
  );
};

export default Notification;
