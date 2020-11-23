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
import { Tabs } from 'react-bootstrap';

export const TabContainer = styled.div`
  width: 100vw;
  padding: 1.9rem 0 0 0;
  background-color: #1e1e1e;
  overflow: auto !important;
  display: inline-block;
`;

export const NavTab = styled(Tabs)`
  border: none;
  background-color: #1e1e1e;

  a {
    background-color: #222126 !important;
    color: #e6a195 !important;
    outline: none !important;
    border: none !important;
    border-bottom: 3px solid #e6a195 !important;
  }
`;
