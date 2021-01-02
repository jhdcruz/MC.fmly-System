/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import { NavTabs, TabContainer } from '../components/common/modules/Tabs';
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
} from '../components/Dashboard/MongoCharts';
import {
  CompletedOrders,
  InventoryCapacity,
  InventoryTotal,
  InventoryValue,
  PendingOrders,
  TotalProducts,
  TotalRevenue,
  TotalSuppliers
} from '../components/Dashboard/MongoWidgets';
import { OverStocked, UnderStocked } from '../components/Dashboard/MongoTables';
import ErrorBoundary from '../components/common/ErrorBoundary';

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
          <ErrorBoundary>
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
          </ErrorBoundary>
        </Tab>

        {/* Inventory Reports Tab */}
        <Tab
          eventKey="inventory"
          title="Inventory Reports"
          style={{
            padding: '0 2rem 1rem 2rem'
          }}
        >
          <ErrorBoundary>
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
          </ErrorBoundary>
        </Tab>

        {/* Order Reports Tab */}
        <Tab
          eventKey="order"
          title="Order Reports"
          style={{
            padding: '1rem 2rem'
          }}
        >
          <ErrorBoundary>
            <Row>
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
          </ErrorBoundary>
        </Tab>
      </NavTabs>
    </TabContainer>
  );
}
