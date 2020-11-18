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

import { Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import TabItem from './TabItem';
import routes from '../routes';
import { faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SideNav = styled(Container)`
  width: 4.5rem;
  padding: 0;
`;

const SideMenu = styled.aside`
  background-color: #1e1e1e;
  display: block;
  width: 3.4rem;
  margin: 2.5rem 15px;
  padding: 0;
  height: max-content;
  border-radius: 1.6rem;
  box-shadow: 0 3px 6px #232323;
  z-index: 9;
  overflow: auto !important;

  hr {
    margin: 5px 0;
    border-top: 5px solid rgba(70, 70, 70, 1);
  }
`;

export default function Sidebar(props) {
  return (
    <SideNav>
      <SideMenu>
        <Nav defaultActiveKey="/" className="flex-column">
          {/* Custom Navigation per views*/}
          {props.navigation}

          {/* Fixed Navigation | All views */}
          <hr />
          <TabItem
            tab="Settings"
            overlay="Settings"
            route={routes.SETTINGS}
            icon={faCog}
          />
          <TabItem
            tab="Logout"
            overlay="Logout"
            icon={faSignOutAlt}
            // Reload window since redirecting doesn't work
            state={() => {
              window.location.href = '/';
            }}
          />
        </Nav>
      </SideMenu>
    </SideNav>
  );
}
