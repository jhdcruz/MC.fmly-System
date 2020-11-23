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
import { Button, ListGroup } from 'react-bootstrap';

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
