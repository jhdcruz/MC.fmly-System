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
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import routes from '../constants/routes';
import '../global.scss';
import ApiStatus from '../containers/ApiStatus';
import { Fallback } from '../components/common/Loaders';

const Pos = lazy(() => import('../pages/pos'));

/*********************************
 * * Cashier Permission Access
 *********************************/

export default function Cashier() {
  return (
    <Fragment>
      <Router>
        <Container fluid>
          <Sidebar
            navigation={
              <>
                {/* Role-specific views */}
                <TabItem
                  tab="Point of Sale"
                  overlay="Point of Sale"
                  route={routes.POS}
                  icon={faShoppingCart}
                />
              </>
            }
            bottom={<ApiStatus placement="right" left="0.8rem" />}
          />
          <div id="pageRoutes" className="routerContainer">
            <Switch>
              <Suspense fallback={<Fallback />}>
                <Route exact path="/">
                  <Redirect from="/" to="/pos" />
                </Route>
                <Route path={routes.POS} component={Pos} />
              </Suspense>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
