/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
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
    >
      <TabRoutes to={props.route} draggable={false} onClick={props.state}>
        <Nav.Link as="li">
          <FAIcon icon={props.icon} />
        </Nav.Link>
      </TabRoutes>
    </OverlayTrigger>
  );
}
