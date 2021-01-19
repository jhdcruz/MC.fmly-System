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
import routes from '../constants/routes';
import '../global.scss';
import { faServer, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Fallback } from '../components/common/Loaders';
import ApiStatus from '../containers/ApiStatus';

const Users = lazy(() => import('../pages/employees'));
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
                <ApiStatus placement="right" left="0.8rem" />
              </>
            }
          />
          <div id="pageRoutes" className="routerContainer">
            <Switch>
              <Suspense fallback={<Fallback />}>
                <Route exact path="/">
                  <Redirect from="/" to="/sysinfo" />
                </Route>
                <Route path={routes.SYSINFO} component={SysInfo} />
                <Route path={routes.EMPLOYEES} component={Users} />
              </Suspense>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
