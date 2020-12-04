/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import styled from 'styled-components';
import Tabs from 'react-bootstrap/Tabs';

export const TabContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: inline-block;

  // Only allow scroll inside tabs
  .tab-pane,
  .tab-pane .active {
    overflow: auto !important;
  }
`;

export const NavTabs = styled(Tabs)`
  width: 100%;
  padding-top: 1.9rem;
  background-color: #1e1e1e;
  border: none;

  a {
    color: #e6a195 !important;
    background-color: #222126 !important;
    border: none !important;
    border-bottom: 3px ridge #e6a195 !important;
    border-radius: initial !important;
    outline: none !important;

    :hover {
      background-color: #303030 !important;
      box-shadow: 2px 5px 7px #222222;
    }
  }
`;
