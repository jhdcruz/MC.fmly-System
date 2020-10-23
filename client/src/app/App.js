/*
 *     MC Inventory Management System
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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes.json';
import Container from 'react-bootstrap/Container';
import './App.scss';
import Sidebar from './components/Sidebar';

// Routes
import Dashboard from './containers/Dashboard';
import Inventory from './containers/Inventory';
import Reports from './containers/Reports';

export default function App() {
  return (
    <Fragment>
      <Router>
        <Container i="RootApp" fluid>
          <Sidebar />
          <div id="pageRoutes">
            <Switch>
              <Route exact path={routes.DASHBOARD} component={Dashboard} />
              <Route path={routes.INVENTORY} component={Inventory} />
              <Route path={routes.ORDERS} component={Reports} />
              <Route path={routes.NOTFOUND}>Something went wrong...</Route>
            </Switch>
          </div>
        </Container>
      </Router>
    </Fragment>
  );
}
