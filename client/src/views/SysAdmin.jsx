/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/sidebar/Sidebar';
import routes from '../utils/routes';
import '../global.scss';
import RouteTransition from '../components/common/RouteTransition';
import {
  faChartBar,
  faServer,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
// Routes
import Dashboard from '../pages/Dashboard';
import SysInfo from '../pages/SysInfo';
import TabItem from '../components/sidebar/TabItem';
import Users from '../pages/Users';

/*********************************
 * * Cashier Permission Access
 *********************************/

export default function SysAdmin() {
  return (
    <Fragment>
      <Router>
        <Container fluid>
          <Sidebar
            navigation={
              <>
                {/*Available routes based on role*/}
                <TabItem
                  tab="System Info"
                  overlay="System Info"
                  route={routes.SYSINFO}
                  icon={faServer}
                />
                <TabItem
                  tab="Dashboard"
                  overlay="Dashboard"
                  route={routes.DASHBOARD}
                  icon={faChartBar}
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
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <RouteTransition
              // * Default role view
              view="/sysinfo"
              // * View routes
              children={
                <>
                  <Route exact path={routes.DASHBOARD} component={Dashboard} />
                  <Route path={routes.SYSINFO} component={SysInfo} />
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
