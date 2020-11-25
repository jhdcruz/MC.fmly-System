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

import { Row, Tab } from 'react-bootstrap';
import {
  CategoryDetails,
  ProductMap,
  ProductQuantityLines,
  TotalByCategory,
  TotalByTypes,
  TypeDetails
} from '../components/mongodb/MongoCharts';
import {
  InventoryCapacity,
  InventoryTotal,
  InventoryValue,
  TotalProducts,
  TotalSuppliers
} from '../components/mongodb/MongoWidgets';
import { OverStocked, UnderStocked } from '../components/mongodb/MongoTables';
import { NavTabs, TabContainer } from './__containers.module';
import Col from 'react-bootstrap/Col';

export default function Dashboard() {
  return (
    <TabContainer
      style={{
        overflow: 'auto !important'
      }}
    >
      <NavTabs defaultActiveKey="overview" id="Navigation Tabs" justify>
        <Tab
          eventKey="overview"
          title="Overview"
          style={{
            padding: '1rem 2rem'
          }}
        >
          <Row>
            <InventoryCapacity />
            <Col>
              <InventoryTotal />
              <InventoryValue />
              <TotalProducts />
              <TotalSuppliers />
            </Col>
          </Row>
          <Row>
            <UnderStocked />
            <OverStocked />
          </Row>
        </Tab>
        <Tab
          eventKey="inventory"
          title="Inventory Reports"
          style={{
            padding: '0 2rem'
          }}
        >
          <Row>
            <TypeDetails />
            <CategoryDetails />
          </Row>
          <Row>
            <TotalByCategory />
            <TotalByTypes />
          </Row>
          <Row>
            <ProductMap />
            <ProductQuantityLines />
          </Row>
        </Tab>
        <Tab
          eventKey="order"
          title="Order Reports"
          style={{
            padding: '0 2rem'
          }}
        >
          ...
        </Tab>
      </NavTabs>
    </TabContainer>
  );
}
