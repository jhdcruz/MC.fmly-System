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

import { Tab, Tabs } from 'react-bootstrap';
import { DBMetrics } from '../components/system/MongoMetrics';
import styled from 'styled-components';
import Logs from '../components/system/Logs';

const NavTab = styled(Tabs)`
  border: none;
  background-color: #222126;

  a {
    background-color: #1e1e1e !important;
    color: #e6a195 !important;
    outline: none !important;
    border: none !important;
    border-bottom: 3px solid #e6a195 !important;
  }
`;

export default function SysInfo() {
  return (
    <div>
      <NavTab
        defaultActiveKey="system"
        id="System Tabs"
        style={{
          overflow: 'hidden'
        }}
      >
        <Tab eventKey="system" title="Overview">
          <DBMetrics />
        </Tab>
        <Tab eventKey="logs" title="Logs">
          <Logs />
        </Tab>
      </NavTab>
    </div>
  );
}
