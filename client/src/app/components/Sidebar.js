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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes.json';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faClipboardList,
  faCog,
  faHistory,
  faHome,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import Brand from '../../assets/img/profile.png';
import SettingsModal from '../components/SettingsModal';
import LockModal from '../components/LockModal';

const SideMenu = styled.aside`
  background-color: #232323;
  position: fixed;
  left: 0;
  margin: 1rem 0 1rem 1rem;
  width: 14rem;
  height: 90vh;
  border-radius: 1.6rem;
  box-shadow: 0 3px 6px #232323;
  z-index: 9;

  #AppLockModal {
    position: fixed;
    bottom: 8%;
    padding: 5px 3.5rem 5px 2.4rem !important;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

const Branding = styled(Image)`
  width: 10rem;
  display: block;
  margin: 3rem auto 1rem auto;
  border-radius: 5px;
`;

const TabRoutes = styled(Link)`
  color: #d9d9d9 !important;
  font-size: 1.1rem;
  padding: 5px 1.7rem 5px 2.3rem;
  margin: 0;

  :hover {
    background-color: #181818 !important;
    box-shadow: inset 0 0 15px #111111;
  }
`;

const FAIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  margin-right: 4px;
  text-align: center;
`;

export default function Sidebar() {
  const [settingsShow, setSettingsShow] = useState(false);
  const [lockShow, setLockShow] = useState(false);

  return (
    <SideMenu>
      <Nav defaultActiveKey="/" className="flex-column">
        <Branding src={Brand} />
        <TabRoutes to={routes.DASHBOARD} draggable={false}>
          <Nav.Link as="li">
            <FAIcon icon={faHome} /> Dashboard
          </Nav.Link>
        </TabRoutes>
        <TabRoutes to={routes.RECENT} draggable={false}>
          <Nav.Link as="li">
            <FAIcon icon={faHistory} /> Recent
          </Nav.Link>
        </TabRoutes>
        <TabRoutes to={routes.CATALOG} draggable={false}>
          <Nav.Link as="li">
            <FAIcon icon={faBoxes} /> Catalog
          </Nav.Link>
        </TabRoutes>
        <TabRoutes to={routes.INVOICES} draggable={false}>
          <Nav.Link as="li">
            <FAIcon icon={faClipboardList} /> Invoices
          </Nav.Link>
        </TabRoutes>
        {/* Settings Modal */}
        <TabRoutes onClick={() => setSettingsShow(true)} draggable={false}>
          <Nav.Link as="li">
            <FAIcon icon={faCog} /> Settings
          </Nav.Link>
        </TabRoutes>
        <SettingsModal
          show={settingsShow}
          onHide={() => setSettingsShow(false)}
        />
        {/* AppLock Modal */}
        <TabRoutes
          id="AppLockModal"
          onClick={() => setLockShow(true)}
          draggable={false}
        >
          <Nav.Link as="li">
            <FAIcon icon={faLock} /> Lock App
          </Nav.Link>
        </TabRoutes>
        <LockModal show={lockShow} onHide={() => setLockShow(false)} />
      </Nav>
    </SideMenu>
  );
}
