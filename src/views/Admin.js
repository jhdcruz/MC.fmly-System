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
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/Sidebar';
import TabItem from '../components/TabItem';
import NotFound from '../components/NotFound';
import routes from '../routes.js';
import '../App.scss';
// Routes
import Dashboard from '../containers/Dashboard';
import Recent from '../containers/Recent';
import Invoices from '../containers/Invoices';
import PointOfSale from '../containers/PointOfSale';
import Catalog from '../containers/Catalog';
import Settings from '../containers/Settings';
import Contacts from '../containers/Contacts';
import {
  faBoxes,
  faFileInvoice,
  faHistory,
  faHome,
  faShoppingCart,
  faTruck
} from '@fortawesome/free-solid-svg-icons';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

// ? wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 30
  });
}

const bounceTransition = {
  // ? tart in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 0.95
  },
  // ? leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.9)
  },
  // ? and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

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
                  icon={faHome}
                />
                <TabItem
                  tab="Recent"
                  overlay="Recent"
                  route={routes.RECENT}
                  icon={faHistory}
                />
                <TabItem
                  tab="Catalog"
                  overlay="Catalog"
                  route={routes.CATALOG}
                  icon={faBoxes}
                />

                <TabItem
                  tab="Invoices"
                  overlay="Invoices"
                  route={routes.INVOICES}
                  icon={faFileInvoice}
                />
                <TabItem
                  tab="Contacts"
                  overlay="Contacts"
                  route={routes.CONTACTS}
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
                  <Redirect to="/dashboard"/>
                </Route>
                <Route path={routes.DASHBOARD} component={Dashboard} />
                <Route path={routes.RECENT} component={Recent} />
                <Route path={routes.CATALOG} component={Catalog} />
                <Route path={routes.INVOICES} component={Invoices} />
                <Route path={routes.CONTACTS} component={Contacts} />
                <Route path={routes.POS} component={PointOfSale} />
                <Route path={routes.SETTINGS} component={Settings} />
                <Route path={routes.NOTFOUND} component={NotFound} />
              </AnimatedSwitch>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
