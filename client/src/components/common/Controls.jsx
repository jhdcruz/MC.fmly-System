/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ControlButton = styled(Button)`
  color: #c4c4c4;
  width: max-content;
  background-color: #222126;
  margin: 0;
  padding: 0.55rem 0.9rem;
  border-radius: 0.3rem;
  border: none;

  :focus {
    color: #c4c4c4;
    width: max-content;
    background-color: #222126;
    box-shadow: none;
    margin: 0;
    padding: 0.55rem 0.9rem;
    border-radius: 0.3rem;
    border: none;
  }

  :hover {
    color: #e6a195 !important;
    background-color: #121416 !important;
    box-shadow: none !important;
  }
`;

const LargeButton = styled(ControlButton)`
  width: max-content;
  height: 10vh;
  font-size: 1.3vw;
  padding: 0.5rem 1rem;
  margin: 0 0.2rem;
`;

// * Button w/ Tooltip
export const TooltipControl = (props) => {
  return (
    <OverlayTrigger
      placement={props.placement}
      delay={{
        show: 10,
        hide: 10
      }}
      overlay={
        <Tooltip id="button-tooltip" {...props}>
          {props.tooltip}
        </Tooltip>
      }
    >
      <ControlButton onClick={props.action}>
        <FontAwesomeIcon icon={props.icon} /> {props.content}
      </ControlButton>
    </OverlayTrigger>
  );
};

export const Control = (props) => {
  return (
    <ControlButton onClick={props.action}>
      <FontAwesomeIcon icon={props.icon} /> {props.content}
    </ControlButton>
  );
};

export const LargeControl = (props) => {
  return (
    <LargeButton onClick={props.action}>
      <FontAwesomeIcon icon={props.icon} /> {props.content}
    </LargeButton>
  );
};
