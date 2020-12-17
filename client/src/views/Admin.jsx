/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/sidebar/Sidebar';
import TabItem from '../components/sidebar/TabItem';
import RouteTransition from '../components/common/RouteTransition';
// Assets
import routes from '../utils/routes';
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
// Routes
import Dashboard from '../pages/Dashboard';
import Recent from '../pages/Recent';
import Inventory from '../pages/Inventory';
import Transactions from '../pages/Transactions';
import Suppliers from '../pages/Suppliers';
import Pos from '../pages/Pos';
import Users from '../pages/Users';
import SysInfo from '../pages/SysInfo';
import Status from '../containers/Status';

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
                  tab="Transactions"
                  overlay="Transactions"
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
                  tab="Users Management"
                  overlay="Users Management"
                  route={routes.USERS}
                  icon={faUsers}
                />
                <TabItem
                  tab="System Info"
                  overlay="System Info"
                  route={routes.SYSINFO}
                  icon={faServer}
                />
                <Status placement="right" left="0.8rem" />
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <RouteTransition
              // * Default role view
              view="/dashboard"
              // * View routes
              children={
                <>
                  <Route path={routes.DASHBOARD} component={Dashboard} />
                  <Route path={routes.SYSINFO} component={SysInfo} />
                  <Route path={routes.RECENT} component={Recent} />
                  <Route path={routes.INVENTORY} component={Inventory} />
                  <Route path={routes.TRANSACTIONS} component={Transactions} />
                  <Route path={routes.SUPPLIERS} component={Suppliers} />
                  <Route path={routes.POS} component={Pos} />
                  <Route path={routes.USERS} component={Users} />
                </>
              }
            />
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
