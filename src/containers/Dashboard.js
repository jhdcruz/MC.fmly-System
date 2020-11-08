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

import SalesReport from '../components/charts/SalesReport';
import ProductDetails from '../components/charts/ProductDetails';
import Widget from '../components/Widget';
import Row from 'react-bootstrap/Row';
import useProducts from '../hooks/useProducts';
import Notification from '../components/Notification';

export default function Dashboard() {
  const [products] = useProducts();

  const totalProducts =
    products &&
    products.reduce(function (sum, product) {
      return sum + product.quantity;
    }, 0);

  return (
    <div
      style={{
        display: 'inline-block',
        overflow: 'auto',
        height: '100vh',
        marginLeft: '1rem',
        padding: '0 1.3rem 2.5rem 1.3rem'
      }}
    >
      <Row>
        {/* TODO: Fetch Data from API */}
        <Widget
          subject="Total Products"
          amount={totalProducts}
          label="/10000"
        />
        <Widget subject="Total Suppliers" amount="4" label="Contacts" />
      </Row>
      <Row
        style={{
          marginTop: '1.3rem'
        }}
      >
        <SalesReport />
        <ProductDetails />
      </Row>
      <Notification
        title="Notice"
        time="System Guide"
        message="Total products widget is a dynamic component, fetches real data from database."
        delay={6500}
      />
    </div>
  );
}
