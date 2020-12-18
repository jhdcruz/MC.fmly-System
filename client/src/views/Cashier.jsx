/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Sidebar from '../components/sidebar/Sidebar';
import TabItem from '../components/sidebar/TabItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import RouteTransition from '../components/common/RouteTransition';
import routes from '../utils/routes';
import '../global.scss';
// Routes
import Pos from '../pages/Pos';
import Status from '../containers/Status';

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
            bottom={<Status placement="right" left="0.8rem" />}
          />
          <div id="pageRoutes" className="routerContainer">
            <RouteTransition
              // * Default role view
              view="/pos"
              // * View routes
              children={
                <>
                  <Route path={routes.POS} component={Pos} />
                </>
              }
            />
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}