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

import { PureComponent } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import data from './json/productDetails.json';

const ProductContainer = styled(Container)`
  background-color: #1e1e1e;
  box-shadow: 0 3px 6px #232323;
  border-radius: 1rem;
  width: max-content;
  height: max-content;
  margin: 1rem 0;
  padding: 20px;
  vertical-align: middle;
`;

const ChartTitle = styled.h4`
  color: #eccec9;
  font-weight: bold;
  margin: 0 0 15px 1rem;
`;

const COLORS = ['#2579f6', '#4de670', '#faa142', '#FF8042', '#e93ff5'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="whitesmoke"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class ProductDetails extends PureComponent {
  render() {
    return (
      <ProductContainer>
        <ChartTitle>Product Details</ChartTitle>
        <PieChart width={210} height={220}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            style={{
              margin: '0 auto'
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            itemStyle={{
              color: 'whitesmoke'
            }}
          />
        </PieChart>
      </ProductContainer>
    );
  }
}
