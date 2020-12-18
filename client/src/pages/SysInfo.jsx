/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import { DBMetrics } from '../components/embeds/Metrics';
import Logs from '../components/embeds/Logs';
import Release from '../containers/sysinfo/Release';
import Development from '../containers/sysinfo/Development';
import { NavTabs, TabContainer } from '../containers/__containers.module';

export default function SysInfo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.logdna.net/js/embed.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  });

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
