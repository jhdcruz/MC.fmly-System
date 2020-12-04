/*
 *     MC.fmly Inventory Management System
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
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegularButton = styled(Button)`
  color: #c4c4c4;
  width: max-content;
  height: max-content;
  background-color: #222126;
  margin: 0 0.3rem;
  border-radius: 0.3rem;
  border: none;
  box-shadow: 1px 2px 5px #1b1b1b;

  :hover,
  :active,
  :focus {
    color: #e6a195 !important;
    background-color: #121416 !important;
  }
`;

const LargeButton = styled(RegularButton)`
  height: 10vh;
  font-size: 1.3vw;
  width: max-content;
`;

export const Control = (props) => {
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{
        show: 250,
        hide: 400
      }}
      overlay={
        <Tooltip id="button-tooltip" {...props}>
          {props.tooltip}
        </Tooltip>
      }
    >
      <RegularButton onClick={props.action}>
        <FontAwesomeIcon icon={props.icon} /> {props.content}
      </RegularButton>
    </OverlayTrigger>
  );
};

export const LargeControl = (props) => {
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{
        show: 250,
        hide: 400
      }}
      overlay={
        <Tooltip id="button-tooltip" {...props}>
          {props.tooltip}
        </Tooltip>
      }
    >
      <LargeButton onClick={props.action}>
        <FontAwesomeIcon icon={props.icon} /> {props.content}
      </LargeButton>
    </OverlayTrigger>
  );
};
