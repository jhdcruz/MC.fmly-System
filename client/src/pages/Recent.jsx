/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import RecentSuppliers from '../containers/recent/RecentSuppliers';
import RecentProducts from '../containers/recent/RecentProducts';
import RecentUsers from '../containers/recent/RecentUsers';
import RecentTransactions from '../containers/recent/RecentTransactions';
import Notification from '../components/common/Notification';
import { NavTabs, TabContainer } from '../containers/Containers.module';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Recent() {
  return (
    <TabContainer>
      <NavTabs defaultActiveKey="products" id="Navigation Tabs" justify>
        <Tab eventKey="products" title="Products">
          <ErrorBoundary>
            <RecentProducts />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="suppliers" title="Suppliers">
          <ErrorBoundary>
            <RecentSuppliers />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="users" title="Users">
          <ErrorBoundary>
            <RecentUsers />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="transactions" title="Transactions">
          <ErrorBoundary>
            <RecentTransactions />
          </ErrorBoundary>
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
