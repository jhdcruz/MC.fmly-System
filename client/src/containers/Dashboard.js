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

import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import {
  CategoryDetails,
  OrdersPerMonth,
  OrderStatus,
  ProductMap,
  ProductQuantityLines,
  TotalByCategory,
  TotalByTypes,
  TotalRevenueChart,
  TypeDetails
} from '../components/charts/MongoCharts';
import {
  CompletedOrders,
  InventoryCapacity,
  InventoryTotal,
  InventoryValue,
  PendingOrders,
  TotalProducts,
  TotalRevenue,
  TotalSuppliers
} from '../components/charts/MongoWidgets';
import { OverStocked, UnderStocked } from '../components/charts/MongoTables';
import { NavTabs, TabContainer } from './__containers.module';

export default function Dashboard() {
  return (
    <TabContainer
      style={{
        overflow: 'auto !important'
      }}
    >
      <NavTabs defaultActiveKey="overview" id="Navigation Tabs" justify>
        {/* Overview Tab */}
        <Tab
          eventKey="overview"
          title="Overview"
          style={{
            padding: '1rem 2rem'
          }}
        >
          <Row>
            <InventoryCapacity />
            <Col className="pt-1">
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

        {/* Inventory Reports Tab */}
        <Tab
          eventKey="inventory"
          title="Inventory Reports"
          style={{
            padding: '0 2rem 1rem 2rem'
          }}
        >
          <Row>
            <ProductQuantityLines />
            <ProductMap />
          </Row>
          <Row>
            <TypeDetails />
            <CategoryDetails />
          </Row>
          <Row>
            <TotalByCategory />
            <TotalByTypes />
          </Row>
        </Tab>

        {/* Order Reports Tab */}
        <Tab
          eventKey="order"
          title="Order Reports"
          style={{
            padding: '1rem 2rem'
          }}
        >
          <Row>
            >
            <Col className="p-0 pt-1">
              <TotalRevenue />
              <PendingOrders />
              <CompletedOrders />
            </Col>
            <TotalRevenueChart />
          </Row>

          <Row>
            <OrderStatus />
            <OrdersPerMonth />
          </Row>
        </Tab>
      </NavTabs>
    </TabContainer>
  );
}
