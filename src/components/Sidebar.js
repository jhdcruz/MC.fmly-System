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
  faAddressBook,
  faBoxes,
  faCog,
  faFileInvoice,
  faHistory,
  faHome,
  faQuestionCircle,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

const SideMenu = styled.aside`
  background-color: #1e1e1e;
  position: fixed;
  top: 95%;
  transform: translateY(-100%);
  width: 3.4rem;
  margin: 0.5rem 0.8rem;
  padding: 0;
  height: 90vh;
  border-radius: 1.6rem;
  box-shadow: 0 3px 6px #232323;
  z-index: 9;

  .BottomTab {
    margin-top: 31vh !important;
  }
`;

const TabRoutes = styled(Link)`
  color: #eccec9 !important;
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

const TabItem = (props) => {
  return (
    <OverlayTrigger
      placement="right"
      delay={{
        show: 250,
        hide: 400
      }}
      overlay={
        <Tooltip id="button-tooltip" {...props}>
          {props.tab}
        </Tooltip>
      }
      name={props.overlay}
    >
      <TabRoutes to={props.route} className={props.theme} draggable={false}>
        <Nav.Link as="li">
          <FAIcon icon={props.icon} />
        </Nav.Link>
      </TabRoutes>
    </OverlayTrigger>
  );
};

export default function Sidebar() {
  return (
    <SideMenu>
      <Nav defaultActiveKey="/" className="flex-column">
        <TabItem
          tab="Dashboard"
          overlay="Dashboard"
          route={routes.DASHBOARD}
          icon={faHome}
        />
        <TabItem
          tab="Recent"
          overlay="Recent"
          route={routes.RECENT}
          icon={faHistory}
        />
        <TabItem
          tab="Catalog"
          overlay="Catalog"
          route={routes.CATALOG}
          icon={faBoxes}
        />
        <TabItem
          tab="Invoices"
          overlay="Invoices"
          route={routes.INVOICES}
          icon={faFileInvoice}
        />
        <TabItem
          tab="Contacts"
          overlay="Contacts"
          route={routes.CONTACTS}
          icon={faAddressBook}
        />
        <TabItem
          tab="Point of Sale"
          overlay="Point of Sale"
          route={routes.POS}
          icon={faShoppingCart}
        />

        {/* Bottom Tabs */}
        <TabItem
          theme="BottomTab"
          tab="Settings"
          overlay="Settings"
          route={routes.SETTINGS}
          icon={faCog}
        />
        <TabItem
          tab="Help"
          overlay="Help"
          route={routes.HELP}
          icon={faQuestionCircle}
        />
      </Nav>
    </SideMenu>
  );
}
