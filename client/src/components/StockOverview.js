import { PureComponent } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import Container from 'react-bootstrap/Container';
import area from './json/areaChart.json';

export default class StockOverview extends PureComponent {
  render() {
    return (
      <Container fluid>
        <AreaChart
          width={500}
          height={300}
          data={area}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#d7b9b4" fill="#d7b9b4" />
        </AreaChart>
      </Container>
    );
  }
}
