/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
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
      placement={props.placement}
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
    <LargeButton onClick={props.action}>
      <FontAwesomeIcon icon={props.icon} /> {props.content}
    </LargeButton>
  );
};
