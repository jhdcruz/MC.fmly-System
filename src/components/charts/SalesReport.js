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
import data from './json/quarterReports.json';
import styled from 'styled-components';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const ChartBlock = styled.div`
  width: 97%;
  height: 60vh;
  padding: 1.3rem 1rem 3.5rem 1rem;
  background-color: #1e1e1e;
  box-shadow: 0 3px 6px #232323;
  border-radius: 1rem;
`;

const ChartTitle = styled.h4`
  color: #eccec9;
  font-weight: bold;
  margin: 0 0 15px 1rem;
`;

const ChartContainer = styled(ResponsiveContainer)`
  color: #bebebe;

  tspan {
    fill: #858585;
  }

  text {
    fill: #ec2738;
  }

  .recharts-default-legend {
    margin: 15px 0 0 0 !important;
  }

  .recharts-default-tooltip {
    background-color: rgba(15, 15, 15, 0.9) !important;
    border: 1px outset #222222 !important;
  }

  .recharts-tooltip-cursor {
    fill: rgba(5, 5, 5, 0.7);
  }
`;

const monthTickFormatter = (tick) => {
  const date = new Date(tick);

  return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  const { value, offset } = payload;
  const date = new Date(value);
  const month = date.getMonth();
  const quarterNo = Math.floor(month / 3) + 1;
  // const isMidMonth = month % 3 === 1;

  if (month % 3 === 1) {
    return (
      <text
        x={x + offset}
        y={y - 4}
        textAnchor="middle"
      >{`Q${quarterNo}`}</text>
    );
  }

  const isLast = month === 11;

  if (month % 3 === 0 || isLast) {
    const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

    return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
  }
  return null;
};
export default class SalesReport extends PureComponent {
  render() {
    return (
      <ChartBlock>
        <ChartTitle>Sales Report (Quarterly)</ChartTitle>
        <ChartContainer>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 5,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="4 3" />
            <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={renderQuarterTick}
              height={1}
              scale="band"
              xAxisId="quarter"
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sold Quantity" fill="#2579f6" />
            <Bar dataKey="Remaining Quantity" fill="#4de670" />
          </BarChart>
        </ChartContainer>
      </ChartBlock>
    );
  }
}
