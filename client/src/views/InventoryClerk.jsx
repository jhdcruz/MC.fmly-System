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
import {
  faBoxes,
  faFileInvoice,
  faHistory,
  faTruck
} from '@fortawesome/free-solid-svg-icons';
import ApiStatus from '../containers/ApiStatus';
import { Fallback } from '../components/common/Loaders';

const Recent = lazy(() => import('../pages/recent'));
const Inventory = lazy(() => import('../pages/inventory'));
const Transactions = lazy(() => import('../pages/transactions'));
const Suppliers = lazy(() => import('../pages/suppliers'));

/*********************************
 * * Inventory Permission Access
 *********************************/

export default function InventoryClerk() {
  return (
    <Fragment>
      <Fragment>
        <Router>
          <Container fluid>
            <Sidebar
              navigation={
                <>
                  {/* Role-specific views */}
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
                </>
              }
              bottom={<ApiStatus placement="right" left="0.8rem" />}
            />
            <div id="pageRoutes" className="routerContainer">
              <Switch>
                <Route exact path="/">
                  <Redirect from="/" to="/recent" />
                </Route>
                <Suspense fallback={<Fallback />}>
                  <Route path={routes.RECENT} component={Recent} />
                  <Route path={routes.INVENTORY} component={Inventory} />
                  <Route path={routes.TRANSACTIONS} component={Transactions} />
                  <Route path={routes.SUPPLIERS} component={Suppliers} />
                </Suspense>
              </Switch>
            </div>
          </Container>
        </Router>
      </Fragment>
    </Fragment>
  );
}
