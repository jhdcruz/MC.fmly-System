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

import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/Sidebar';
import TabItem from '../components/TabItem';
import NotFound from '../components/NotFound';
import { AnimatedSwitch } from 'react-router-transition';
import { bounceTransition, mapStyles } from '../components/common/Transition';
import routes from '../routes';
import '../App.scss';
// Routes
import Dashboard from '../containers/Dashboard';
import SysInfo from '../containers/SysInfo';
import AuditLog from '../containers/AuditLog';
import Invoices from '../containers/Invoices';
import PointOfSale from '../containers/PointOfSale';
import Inventory from '../containers/Inventory';
import Suppliers from '../containers/Suppliers';
import Users from '../containers/Users';
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
                <TabItem
                  tab="Dashboard"
                  overlay="Dashboard"
                  route={routes.DASHBOARD}
                  icon={faChartBar}
                />
                <TabItem
                  tab="Audit Log"
                  overlay="Audit Log"
                  route={routes.AUDITLOG}
                  icon={faHistory}
                />
                <TabItem
                  tab="Inventory"
                  overlay="Inventory"
                  route={routes.INVENTORY}
                  icon={faBoxes}
                />
                <TabItem
                  tab="Invoices"
                  overlay="Invoices"
                  route={routes.INVOICES}
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
                  tab="User Management"
                  overlay="User Management"
                  route={routes.USERS}
                  icon={faUsers}
                />
                <TabItem
                  tab="System Info"
                  overlay="System Info"
                  route={routes.SYSINFO}
                  icon={faServer}
                />
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <Switch>
              {/* Router Transition */}`
              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="routerContent"
              >
                {/* Redirect to role's default view */}
                <Route exact path="/">
                  <Redirect from="/" to="/dashboard" />
                </Route>
                <Route path={routes.DASHBOARD} component={Dashboard} />
                <Route path={routes.SYSINFO} component={SysInfo} />
                <Route path={routes.AUDITLOG} component={AuditLog} />
                <Route path={routes.INVENTORY} component={Inventory} />
                <Route path={routes.INVOICES} component={Invoices} />
                <Route path={routes.SUPPLIERS} component={Suppliers} />
                <Route path={routes.POS} component={PointOfSale} />
                <Route path={routes.USERS} component={Users} />
                <Route path={routes.NOTFOUND} component={NotFound} />
              </AnimatedSwitch>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
