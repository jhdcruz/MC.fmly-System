/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

/****************************************
 * * Shared Styles between `system`
 ****************************************/

export const ListContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #e6a195;
  padding: 0.5rem 0.5rem;
  width: 100%;
  height: 100vh;
  overflow: auto !important;
  position: absolute;
  left: 0;
`;

export const ListGroupItem = styled(ListGroup.Item)`
  color: #e6a195;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e6a195;
  vertical-align: middle;

  div {
    vertical-align: middle;
  }

  p {
    color: #e2e2e2;
  }

  a {
    font-weight: bold;
    color: #e6a195;
    text-shadow: 0 2px 6px #1e1e1e;

    :hover {
      text-decoration-style: solid;
    }
  }

  pre {
    color: #faa142;
    background-color: rgba(5, 5, 5, 0.7);
    max-width: 40vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  kbd {
    color: #faa142;
  }
`;

export const OutlineButton = styled(Button)`
  text-shadow: none;
  float: right;
  font-weight: bold;
  background-color: transparent;
  border: 1px solid #e6a195;
  border-radius: 0.3rem;
  padding: 0.4rem 0.5rem;
  outline: none;

  :hover {
    background-color: #e6a195;
    color: #1e1e1e;
  }
`;
