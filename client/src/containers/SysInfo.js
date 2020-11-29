/*
 *     MC.fmly Inventory Management System
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

import Tab from 'react-bootstrap/Tab';
import { DBMetrics } from '../components/system/Metrics';
import Logs from '../components/system/Logs';
import Updates from '../components/system/Updates';
import Development from '../components/system/Development';
import { NavTabs, TabContainer } from './__containers.module';

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
          <Updates />
        </Tab>
      </NavTabs>
    </TabContainer>
  );
}
