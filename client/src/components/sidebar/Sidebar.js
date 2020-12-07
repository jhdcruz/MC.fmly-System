/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import TabItem from './TabItem';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Brand from '../../assets/img/profile.png';

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
