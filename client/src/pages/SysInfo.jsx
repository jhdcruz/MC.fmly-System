/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import { DBMetrics } from '../components/SysInfo/Metrics';
import Logs from '../components/SysInfo/Logs';
import Release from '../containers/SysInfo/Release';
import Development from '../containers/SysInfo/Development';
import { NavTabs, TabContainer } from '../containers/Containers.module';
import ErrorBoundary from '../components/common/ErrorBoundary';

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
          <ErrorBoundary>
            <DBMetrics />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="logs" title="Logs">
          <ErrorBoundary>
            <Logs />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="updates" title="Updates">
          <ErrorBoundary>
            <Development />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="releases" title="Releases">
          <ErrorBoundary>
            <Release />
          </ErrorBoundary>
        </Tab>
      </NavTabs>
    </TabContainer>
  );
}
