/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import { PosCard } from '../../components/Pos/Card';
import { productCategories } from '../Inventory/Filters';

/**********************************
 * * Filter products by category
 **********************************/
export default function ViewCategory({ data }) {
  return productCategories(data).map((categories) => (
    <Tab.Pane key={categories.category} eventKey={categories.category}>
      {data
        .filter((pane) => pane.category === categories.category)
        .map((product) => PosCard(product))}
    </Tab.Pane>
  ));
}
