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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faClipboardList,
  faCog,
  faHome,
  faPrint
} from '@fortawesome/free-solid-svg-icons';
import Brand from '../../assets/img/profile.png';
import SettingsModal from '../components/SettingsModal';
import Button from 'react-bootstrap/Button';

const SideMenu = styled.aside`
  background-color: #303030;
  position: fixed;
  left: 0;
  margin: 1rem 0 1rem 1rem;
  width: 14rem;
  height: 90vh;
  border-radius: 2rem;
  box-shadow: 0 0 6px #232323;
`;

const Branding = styled(Image)`
  width: 10rem;
  display: block;
  margin: 3rem auto 1rem auto;
`;

const TabRoutes = styled(Link)`
  color: #d9d9d9 !important;
  font-size: 1.1rem;
  padding: 5px 1.7rem;
  margin: 0;

  :hover {
    background-color: #1e1e1e !important;
    box-shadow: inset 0 0 15px #111111;
  }
`;

const SettingsButton = styled(Button)`
  background-color: transparent;
  color: #d9d9d9 !important;
  font-size: 1.1rem;
  padding: 0.8rem 3.1rem 10px 0;
  margin: 0;
  border: none;
  vertical-align: center;

  :hover {
    background-color: #1e1e1e !important;
    box-shadow: inset 0 0 15px #111111;
  }
`;

const FAIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 4px;
  text-align: center;
`;

export default function Sidebar() {
  const [modalShow, setModalShow] = useState(false);

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
        <TabRoutes to="/printing">
          <Nav.Link as="li">
            <FAIcon icon={faPrint} /> Printing
          </Nav.Link>
        </TabRoutes>
        <TabRoutes to="/orders">
          <Nav.Link as="li">
            <FAIcon icon={faClipboardList} /> Orders
          </Nav.Link>
        </TabRoutes>
        {/* Settings Modal */}
        <TabRoutes onClick={() => setModalShow(true)}>
          <Nav.Link as="li">
            <FAIcon icon={faCog} /> Settings
          </Nav.Link>
        </TabRoutes>
        <SettingsModal show={modalShow} onHide={() => setModalShow(false)} />
      </Nav>
    </SideMenu>
  );
}
