/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import Tab from 'react-bootstrap/Tab';
import RecentSuppliers from '../containers/recent/RecentSuppliers';
import RecentProducts from '../containers/recent/RecentProducts';
import RecentUsers from '../containers/recent/RecentUsers';
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
          <RecentUsers />
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
