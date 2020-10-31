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

import { Link } from 'react-router-dom';
import routes from '../routes.json';
import Nav from 'react-bootstrap/Nav';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBoxes,
  faClipboardList,
  faCog,
  faHistory,
  faHome,
  faShoppingCart,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const SideMenu = styled.aside`
  background-color: #232323;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 3.4rem;
  margin: 0.5rem 0.8rem;
  padding: 0;
  height: 90vh;
  border-radius: 1.6rem;
  box-shadow: 0 3px 6px #232323;
  z-index: 9;

  .BottomNav {
    margin-top: 36vh;
  }
`;

const TabRoutes = styled(Link)`
  color: #d7b9b4 !important;
  padding: 0.8rem 5px;

  li {
    margin: 0 auto;
    padding: 0;
    width: max-content;
    text-align: center;

    svg {
      margin: 0 auto;
      text-align: center;
    }
  }

  :hover {
    background-color: #181818 !important;
    border-radius: 100%;
  }
`;

const FAIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  text-align: center;
`;

export default function Sidebar(props) {
  return (
    <SideMenu>
      <Nav defaultActiveKey="/" className="flex-column">
        {/* Dashboard */}
        <OverlayTrigger
          placement="right"
          delay={{
            show: 250,
            hide: 400
          }}
          overlay={
            <Tooltip id="button-tooltip" {...props}>
              Dashboard
            </Tooltip>
          }
          name="Dashboard"
        >
          <TabRoutes to={routes.DASHBOARD} draggable={false}>
            <Nav.Link as="li">
              <FAIcon icon={faHome} />
            </Nav.Link>
          </TabRoutes>
        </OverlayTrigger>

        {/* Recent */}
        <OverlayTrigger
          placement="right"
          delay={{
            show: 250,
            hide: 400
          }}
          overlay={
            <Tooltip id="button-tooltip" {...props}>
              Recent
            </Tooltip>
          }
          name="Recent"
        >
          <TabRoutes to={routes.RECENT} draggable={false}>
            <Nav.Link as="li">
              <FAIcon icon={faHistory} />
            </Nav.Link>
          </TabRoutes>
        </OverlayTrigger>

        {/* Catalog */}
        <OverlayTrigger
          placement="right"
          delay={{
            show: 250,
            hide: 400
          }}
          overlay={
            <Tooltip id="button-tooltip" {...props}>
              Catalog
            </Tooltip>
          }
          name="Catalog"
        >
          <TabRoutes to={routes.CATALOG} draggable={false}>
            <Nav.Link as="li">
              <FAIcon icon={faBoxes} />
            </Nav.Link>
          </TabRoutes>
        </OverlayTrigger>

        {/* Invoices */}
        <OverlayTrigger
          placement="right"
          delay={{
            show: 250,
            hide: 400
          }}
          overlay={
            <Tooltip id="button-tooltip" {...props}>
              Invoices
            </Tooltip>
          }
          name="Invoices"
        >
          <TabRoutes to={routes.INVOICES} draggable={false}>
            <Nav.Link as="li">
              <FAIcon icon={faClipboardList} />
            </Nav.Link>
          </TabRoutes>
        </OverlayTrigger>

        {/* Point of Sale */}
        <OverlayTrigger
          placement="right"
          delay={{
            show: 250,
            hide: 400
          }}
          overlay={
            <Tooltip id="button-tooltip" {...props}>
              Point of Sale
            </Tooltip>
          }
          name="Settings"
        >
          <TabRoutes to={routes.POS} draggable={false}>
            <Nav.Link as="li">
              <FAIcon icon={faShoppingCart} />
            </Nav.Link>
          </TabRoutes>
        </OverlayTrigger>

        {/* User */}
        <OverlayTrigger
          placement="right"
          delay={{
            show: 250,
            hide: 400
          }}
          overlay={
            <Tooltip id="button-tooltip" {...props}>
              User
            </Tooltip>
          }
          name="Settings"
        >
          <TabRoutes className="BottomNav" to={routes.USER} draggable={false}>
            <Nav.Link as="li">
              <FAIcon icon={faUserCircle} />
            </Nav.Link>
          </TabRoutes>
        </OverlayTrigger>

        {/* Settings */}
        <OverlayTrigger
          placement="right"
          delay={{
            show: 250,
            hide: 400
          }}
          overlay={
            <Tooltip id="button-tooltip" {...props}>
              Settings
            </Tooltip>
          }
          name="Settings"
        >
          <TabRoutes to={routes.SETTINGS} draggable={false}>
            <Nav.Link as="li">
              <FAIcon icon={faCog} />
            </Nav.Link>
          </TabRoutes>
        </OverlayTrigger>
      </Nav>
    </SideMenu>
  );
}
