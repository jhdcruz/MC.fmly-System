/*
 *     MC Inventory Management System
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

import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBoxes,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import Brand from '../resources/img/profile.png';

const SideMenu = styled.aside`
  background-color: #2c2c2c;
  position: fixed;
  left: 0;
  width: 14rem;
  height: 100vh;
`;

const Branding = styled(Image)`
  width: 10rem;
  display: block;
  margin: 1rem auto 1rem auto;
`;

const TabRoutes = styled(Link)`
  color: #d9d9d9 !important;
  font-size: 1.1rem;
  padding: 0 1.7rem;
`;

const FAIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 4px;
  text-align: center;
`;

export default function Sidebar() {
  return (
    <SideMenu>
      <Nav defaultActiveKey="/" className="flex-column">
        <Branding src={Brand} />
        <TabRoutes to="/">
          <Nav.Link as="li">
            <FAIcon icon={faHome} /> Dashboard
          </Nav.Link>
        </TabRoutes>
        <TabRoutes to="/inventory">
          <Nav.Link as="li">
            <FAIcon icon={faBoxes} /> Inventory
          </Nav.Link>
        </TabRoutes>
        <TabRoutes to="/orders">
          <Nav.Link as="li">
            <FAIcon icon={faClipboardList} /> Orders
          </Nav.Link>
        </TabRoutes>
      </Nav>
    </SideMenu>
  );
}
