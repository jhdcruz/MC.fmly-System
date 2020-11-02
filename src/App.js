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

import './App.scss';

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';

import Sidebar from './components/Sidebar';
import Catalog from './containers/Catalog';
// Routes
import Dashboard from './containers/Dashboard';
import Invoices from './containers/Invoices';
import PointOfSale from './containers/PointOfSale';
import Recent from './containers/Recent';
import Settings from './containers/Settings';
import Help from './containers/Help';
import routes from './routes.json';

export default function App() {
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

  return (
    <Fragment>
      <Router>
        <Container fluid>
          <Sidebar />
          <div id="pageRoutes" className="routerContainer">
            <Switch>
              {/* Router Transition */}
              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="routerContent"
              >
                <Route exact path={routes.DASHBOARD} component={Dashboard} />
                <Route path={routes.RECENT} component={Recent} />
                <Route path={routes.CATALOG} component={Catalog} />
                <Route path={routes.INVOICES} component={Invoices} />
                <Route path={routes.CONTACTS} component={Contacts} />
                <Route path={routes.POS} component={PointOfSale} />
                <Route path={routes.SETTINGS} component={Settings} />
                <Route path={routes.HELP} component={Help} />
                <Route path={routes.NOTFOUND}>Something went wrong...</Route>
              </AnimatedSwitch>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
