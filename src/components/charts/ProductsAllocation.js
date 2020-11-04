import { PureComponent } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import data from './json/productsCount.json';

export default class ProductsAllocation extends PureComponent {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: 300
        }}
      >
        <PieChart width={550} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}
