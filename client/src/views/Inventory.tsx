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

import { FC, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Catalog from '../containers/Catalog';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/Sidebar';
import routes from '../routes';
import '../App.scss';
// @ts-ignore
import { AnimatedSwitch } from 'react-router-transition';
import { bounceTransition, mapStyles } from '../components/common/Transition';
import {
  faBoxes,
  faFileInvoice,
  faHistory,
  faTruck
} from '@fortawesome/free-solid-svg-icons';
// Views
import Recent from '../containers/Recent';
import Invoices from '../containers/Invoices';
import Contacts from '../containers/Contacts';
import NotFound from '../components/NotFound';
import TabItem from '../components/TabItem';

const Inventory: FC = () => {
  return (
    <Fragment>
      <Fragment>
        <Router>
          <Container fluid>
            <Sidebar
              navigation={
                <>
                  <TabItem
                    tab="System Info"
                    overlay="System Info"
                    route={routes.RECENT}
                    icon={faHistory}
                  />
                  <TabItem
                    tab="System Info"
                    overlay="System Info"
                    route={routes.CATALOG}
                    icon={faBoxes}
                  />
                  <TabItem
                    tab="System Info"
                    overlay="System Info"
                    route={routes.INVOICES}
                    icon={faFileInvoice}
                  />
                  <TabItem
                    tab="System Info"
                    overlay="System Info"
                    route={routes.CONTACTS}
                    icon={faTruck}
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
                    <Redirect to="/recent" />
                  </Route>
                  <Route path={routes.RECENT} component={Recent} />
                  <Route path={routes.CATALOG} component={Catalog} />
                  <Route path={routes.INVOICES} component={Invoices} />
                  <Route path={routes.CONTACTS} component={Contacts} />
                  <Route path={routes.NOTFOUND} component={NotFound} />
                </AnimatedSwitch>
              </Switch>
            </div>
          </Container>
        </Router>
      </Fragment>
    </Fragment>
  );
};

export default Inventory;
