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

import { Container, Image, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import TabItem from './TabItem';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Brand from '../assets/img/profile.png';

const SideNav = styled(Container)`
  width: 4.5rem;
  padding: 0;
  z-index: 9;
`;

const SideMenu = styled.aside`
  background-color: #222126;
  display: block;
  width: 4.5rem;
  padding: 2.5rem 0 0 0;
  height: 100vh;
  box-shadow: 4px 0 12px #2f2f2f;
  border-right: 3px ridge #d69185;
  overflow: auto !important;

  hr {
    margin: 0.3rem 0;
    border-top: 3px ridge #d69185;
  }
`;

export default function Sidebar(props) {
  return (
    <SideNav>
      <SideMenu>
        <Nav defaultActiveKey="/" className="flex-column">
          <Image
            src={Brand}
            alt="MC.fmly"
            className="ml-auto mr-auto"
            width={55}
            height={55}
            draggable={false}
            rounded
          />
          {/* Pass priority navigation down to allow role-based views*/}
          {props.navigation}

          <hr />

          {/* Pass secondary navigation down to allow role-based views*/}
          {props.bottom}

          {/* Fixed navigation | All views */}
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
