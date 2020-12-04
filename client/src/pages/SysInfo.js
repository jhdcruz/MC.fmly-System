/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import Tab from 'react-bootstrap/Tab';
import { DBMetrics } from '../components/embeds/Metrics';
import Logs from '../components/embeds/Logs';
import Release from '../containers/Release';
import Development from '../containers/Development';
import { NavTabs, TabContainer } from '../containers/__containers.module';

export default function SysInfo() {
  return (
    <TabContainer>
      <NavTabs defaultActiveKey="overview" id="System Tabs" justify>
        <Tab eventKey="overview" title="Overview">
          <DBMetrics />
        </Tab>
        <Tab eventKey="logs" title="Logs">
          <Logs />
        </Tab>
        <Tab eventKey="updates" title="Updates">
          <Development />
        </Tab>
        <Tab eventKey="releases" title="Releases">
          <Release />
        </Tab>
      </NavTabs>
    </TabContainer>
  );
}
