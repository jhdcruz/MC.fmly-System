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

import { Row, Tab } from 'react-bootstrap';
import { CategoryDetails, TypeDetails } from '../components/charts/MongoCharts';
import {
  InventoryCapacity,
  InventoryValue,
  TotalProducts,
  TotalSuppliers
} from '../components/charts/MongoWidgets';
import Notification from '../components/common/Notification';
import { NavTabs, TabContainer } from './__containers.module';

export default function Dashboard() {
  return (
    <TabContainer style={{ overflow: 'auto !important' }}>
      <NavTabs defaultActiveKey="overview" id="Navigation Tabs" justify>
        <Tab
          eventKey="overview"
          title="Overview"
          style={{
            padding: '0 2rem'
          }}
        >
          <Row>
            <InventoryCapacity />
            <InventoryValue />
            <TotalProducts />
            <TotalSuppliers />
          </Row>
          <Row>
            <TypeDetails />
            <CategoryDetails />
          </Row>
        </Tab>
      </NavTabs>

      {/* TODO: Move notices to Login | Store events to DB */}
      <Notification
        delay="10000"
        title="Notice"
        time="System Developer"
        message="As of Nov 21, 2020, 5:31 PM GMT +8, API connection route has been resolved. All available services are now operational."
      />
    </TabContainer>
  );
}
