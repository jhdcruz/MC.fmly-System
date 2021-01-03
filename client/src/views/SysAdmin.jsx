/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/Sidebar/Sidebar';
import TabItem from '../components/Sidebar/TabItem';
import routes from '../constants/routes';
import '../global.scss';
import RouteTransition from '../components/common/RouteTransition';
import {
  faChartBar,
  faServer,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { Fallback } from '../components/common/Loaders';
import ApiStatus from '../containers/ApiStatus';

const Dashboard = lazy(() => import('../pages/dashboard'));
const Users = lazy(() => import('../pages/users'));
const SysInfo = lazy(() => import('../pages/sysinfo'));

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
                <ApiStatus placement="right" left="0.8rem" />
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <RouteTransition
              // * Default role view
              view="/sysinfo"
              // * View routes
              children={
                <Suspense fallback={<Fallback />}>
                  <Route exact path={routes.DASHBOARD} component={Dashboard} />
                  <Route path={routes.SYSINFO} component={SysInfo} />
                  <Route path={routes.USERS} component={Users} />
                </Suspense>
              }
            />
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
