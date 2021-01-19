/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { Fragment, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/Sidebar/Sidebar';
import TabItem from '../components/Sidebar/TabItem';
// Assets
import routes from '../constants/routes';
import '../global.scss';
import {
  faBoxes,
  faChartBar,
  faFileInvoice,
  faHistory,
  faServer,
  faShoppingCart,
  faTruck,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { Fallback } from '../components/common/Loaders';
import ApiStatus from '../containers/ApiStatus';

const Dashboard = lazy(() => import('../pages/dashboard'));
const Recent = lazy(() => import('../pages/recent'));
const Inventory = lazy(() => import('../pages/inventory'));
const Transactions = lazy(() => import('../pages/transactions'));
const Suppliers = lazy(() => import('../pages/suppliers'));
const Pos = lazy(() => import('../pages/pos'));
const Users = lazy(() => import('../pages/employees'));
const SysInfo = lazy(() => import('../pages/sysinfo'));

/*********************************
 * * Admin Permission Access
 *********************************/

export default function Admin() {
  return (
    <Fragment>
      <Router>
        <Container fluid>
          <Sidebar
            navigation={
              <>
                {/* Role-specific views */}
                <TabItem
                  tab="Dashboard"
                  overlay="Dashboard"
                  route={routes.DASHBOARD}
                  icon={faChartBar}
                />
                <TabItem
                  tab="Recent"
                  overlay="Recent"
                  route={routes.RECENT}
                  icon={faHistory}
                />
                <TabItem
                  tab="Inventory"
                  overlay="Inventory"
                  route={routes.INVENTORY}
                  icon={faBoxes}
                />
                <TabItem
                  tab="Transactions / Invoices"
                  overlay="Transactions / Invoices"
                  route={routes.TRANSACTIONS}
                  icon={faFileInvoice}
                />
                <TabItem
                  tab="Suppliers"
                  overlay="Suppliers"
                  route={routes.SUPPLIERS}
                  icon={faTruck}
                />
                <TabItem
                  tab="Point of Sale"
                  overlay="Point of Sale"
                  route={routes.POS}
                  icon={faShoppingCart}
                />
              </>
            }
            bottom={
              <>
                <TabItem
                  tab="Employee Management"
                  overlay="Employee Management"
                  route={routes.EMPLOYEES}
                  icon={faUsers}
                />
                <TabItem
                  tab="System Info"
                  overlay="System Info"
                  route={routes.SYSINFO}
                  icon={faServer}
                />
                <ApiStatus placement="right" left="0.8rem" />
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <Switch>
              <Suspense fallback={<Fallback />}>
                <Route exact path="/">
                  <Redirect from="/" to="/dashboard" />
                </Route>
                <Route path={routes.DASHBOARD} component={Dashboard} />
                <Route path={routes.SYSINFO} component={SysInfo} />
                <Route path={routes.RECENT} component={Recent} />
                <Route path={routes.INVENTORY} component={Inventory} />
                <Route path={routes.TRANSACTIONS} component={Transactions} />
                <Route path={routes.SUPPLIERS} component={Suppliers} />
                <Route path={routes.POS} component={Pos} />
                <Route path={routes.EMPLOYEES} component={Users} />
              </Suspense>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
