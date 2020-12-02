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
import RecentSuppliers from '../containers/recent/RecentSuppliers';
import RecentProducts from '../containers/recent/RecentProducts';
import RecentEmployees from '../containers/recent/RecentEmployees';
import RecentTransactions from '../containers/recent/RecentTransactions';
import Notification from '../components/common/Notification';
import { NavTabs, TabContainer } from '../containers/__containers.module';

export default function Recent() {
  return (
    <TabContainer>
      <NavTabs defaultActiveKey="products" id="Navigation Tabs" justify>
        <Tab eventKey="products" title="Products">
          <RecentProducts />
        </Tab>
        <Tab eventKey="suppliers" title="Suppliers">
          <RecentSuppliers />
        </Tab>
        <Tab eventKey="users" title="Users">
          <RecentEmployees />
        </Tab>
        <Tab eventKey="transactions" title="Transactions">
          <RecentTransactions />
        </Tab>
      </NavTabs>
      <Notification
        delay={12000}
        title="Guide"
        message={
          <p>
            Scroll horizontally using <kbd>Shift</kbd> + <kbd>Scroll</kbd>,
            middle-mouse button, or arrow keys.
          </p>
        }
      />
    </TabContainer>
  );
}
