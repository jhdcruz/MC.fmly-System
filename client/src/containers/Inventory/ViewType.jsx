/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Products/table/Header';
import Row from '../../components/Products/table/Row';
import { ProductCard } from '../../components/Products/Card';
import { productTypes } from './Filters';

/**********************************
 * * Filter products by types
 * TODO: Fetch filtered data
 **********************************/
export default function ViewType({ data, view, edit, del }) {
  return (
    <>
      {productTypes(data).map((types) => (
        <Tab.Pane key={types.type} eventKey={types.type}>
          {view === 'list' ? (
            <Header
              data={data
                .filter((pane) => pane.type === types.type)
                .map((product) => Row(product, edit, del))}
            />
          ) : (
            ProductCard(types, edit)
          )}
        </Tab.Pane>
      ))}
    </>
  );
}
