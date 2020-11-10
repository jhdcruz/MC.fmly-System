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

import Row from 'react-bootstrap/Row';
import Notification from '../components/Notification';
import InventoryCapacity from '../components/charts/InventoryCapacity';
import TotalProducts from '../components/charts/TotalProducts';
import InventoryValue from '../components/charts/InventoryValue';
import TypeAllocation from '../components/charts/TypeAllocation';
import CategoryAllocation from '../components/charts/CategoryAllocation';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'inline-block',
        overflow: 'auto',
        height: '100vh',
        width: '100%',
        marginLeft: '1rem',
        padding: '0 1.3rem 2.5rem 1.3rem'
      }}
    >
      <Row>
        <InventoryCapacity />
        <InventoryValue />
        <TotalProducts />
      </Row>
      <Row
        style={{
          marginTop: '1rem'
        }}
      >
        <TypeAllocation />
        <CategoryAllocation />
      </Row>
      <Notification
        title="Notice"
        time="System Guide"
        message="All charts & graphs are live data calculated from the database."
        delay={6500}
      />
    </div>
  );
}
