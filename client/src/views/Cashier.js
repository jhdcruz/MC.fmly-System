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
import Sidebar from '../components/Sidebar';
import { Container } from 'react-bootstrap';
import routes from '../routes';
import { AnimatedSwitch } from 'react-router-transition';
import { bounceTransition, mapStyles } from '../components/common/Transition';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../App.scss';
// Routes
import PointOfSale from '../containers/PointOfSale';
import NotFound from '../components/NotFound';
import TabItem from '../components/TabItem';

export default function Cashier() {
  return (
    <Fragment>
      <Router>
        <Container fluid>
          <Sidebar
            navigation={
              <>
                <TabItem
                  tab="Point of Sale"
                  overlay="Point of Sale"
                  route={routes.POS}
                  icon={faShoppingCart}
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
                <Route exact path="/">
                  <Redirect from="/" to="/pos" />
                </Route>
                <Route path={routes.POS} component={PointOfSale} />
                <Route path={routes.NOTFOUND} component={NotFound} />
              </AnimatedSwitch>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
