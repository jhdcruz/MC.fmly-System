/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import RSuppliers from '../containers/Recent/RSuppliers';
import RProducts from '../containers/Recent/RProducts';
import RUsers from '../containers/Recent/RUsers';
import RTransactions from '../containers/Recent/RTransactions';
import Notification from '../components/common/Notification';
import { NavTabs, TabContainer } from '../components/common/modules/Tabs';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Recent() {
  return (
    <TabContainer className="overflow-hidden">
      <NavTabs defaultActiveKey="products" id="Navigation Tabs" justify>
        <Tab eventKey="products" title="Products">
          <ErrorBoundary>
            <RProducts />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="suppliers" title="Suppliers">
          <ErrorBoundary>
            <RSuppliers />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="users" title="Users">
          <ErrorBoundary>
            <RUsers />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="transactions" title="Transactions">
          <ErrorBoundary>
            <RTransactions />
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
