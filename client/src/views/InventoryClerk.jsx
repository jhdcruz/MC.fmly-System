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
  faBoxes,
  faFileInvoice,
  faHistory,
  faTruck
} from '@fortawesome/free-solid-svg-icons';
// Views
import Recent from '../pages/Recent';
import TabItem from '../components/sidebar/TabItem';
import Inventory from '../pages/Inventory';
import Suppliers from '../pages/Suppliers';
import Transactions from '../pages/Transactions';
import Status from '../containers/Status';

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
              bottom={<Status placement="right" left="0.8rem" />}
            />
            <div id="pageRoutes" className="routerContainer">
              <RouteTransition
                // * Default role view
                view="/recent"
                // * View routes
                children={
                  <>
                    <Route path={routes.RECENT} component={Recent} />
                    <Route path={routes.INVENTORY} component={Inventory} />
                    <Route
                      path={routes.TRANSACTIONS}
                      component={Transactions}
                    />
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
