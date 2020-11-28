/*
 *     MC.fmly Inventory Management System
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
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Inventory from '../containers/Inventory';
import Sidebar from '../components/Sidebar';
import routes from '../routes';
import '../App.scss';
import RouteTransition from '../components/common/RouteTransition';
import {
  faBoxes,
  faFileInvoice,
  faHistory,
  faTruck
} from '@fortawesome/free-solid-svg-icons';
// Views
import AuditLog from '../containers/AuditLog';
import Transactions from '../containers/Transactions';
import Suppliers from '../containers/Suppliers';
import TabItem from '../components/TabItem';

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
                    tab="Invoices"
                    overlay="Invoices"
                    route={routes.INVOICES}
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
            />
            <div id="pageRoutes" className="routerContainer">
              <RouteTransition
                // * Default role view
                view="/recent"
                // * View routes
                children={
                  <>
                    <Route path={routes.RECENT} component={AuditLog} />
                    <Route path={routes.INVENTORY} component={Inventory} />
                    <Route path={routes.INVOICES} component={Transactions} />
                    <Route path={routes.SUPPLIERS} component={Suppliers} />
                  </>
                }
              />
            </div>
          </Container>
        </Router>
      </Fragment>
    </Fragment>
  );
}
