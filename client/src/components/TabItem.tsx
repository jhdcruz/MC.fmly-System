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

import { ComponentType, FC } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export interface RouteProps {
  // Intentional any
  tab: string | ComponentType;
  overlay?: any;
  route?: any;
  state?: any;
  icon: any;
}

const TabItem: FC<RouteProps> = (props) => {
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
};

export default TabItem;
