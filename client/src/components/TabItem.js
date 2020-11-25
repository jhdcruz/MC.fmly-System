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
import styled from 'styled-components';
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/************************
 * * Sidebar Tabs
 ************************/

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
    border-left: 3px outset #eccec9;
    background-color: #303030 !important;
    box-shadow: 2px 5px 7px #222222;
  }
`;

const FAIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  text-align: center;
`;

export default function TabItem(props) {
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
      // name={props.overlay}
    >
      <TabRoutes to={props.route} draggable={false} onClick={props.state}>
        <Nav.Link as="li">
          <FAIcon icon={props.icon} />
        </Nav.Link>
      </TabRoutes>
    </OverlayTrigger>
  );
}
