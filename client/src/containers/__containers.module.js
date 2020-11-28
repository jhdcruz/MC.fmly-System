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
import Tabs from 'react-bootstrap/Tabs';

/****************************************
 * * Shared Styles between `containers`
 ****************************************/

export const TabContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: inline-block;

  // Only allow scroll inside tabs
  .tab-pane,
  .tab-pane .active {
    overflow: auto !important;
  }
`;

export const NavTabs = styled(Tabs)`
  width: 100%;
  padding-top: 1.9rem;
  background-color: #1e1e1e;
  border: none;

  a {
    color: #e6a195 !important;
    background-color: #222126 !important;
    border: none !important;
    border-bottom: 3px ridge #e6a195 !important;
    border-radius: initial !important;
    outline: none !important;

    :hover {
      background-color: #303030 !important;
      box-shadow: 2px 5px 7px #222222;
    }
  }
`;
