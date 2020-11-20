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

import { Nav, Tab } from 'react-bootstrap';
import Categories from '../components/Categories';
import ProductTable from '../components/tables/ProductHeader';
import ProductRow from '../components/tables/ProductRow';
import Loader from '../components/common/Loader';
// import useProducts from '../hooks/useProducts';
// Mock Data
import products from '../__mocks__/products.json';
import Notification from '../components/common/Notification';

export default function Inventory() {
  // const [products] = useProducts();

  // Removes duplicate properties | category
  const productCategories = products
    .filter(
      (items, index, self) =>
        index ===
        self.findIndex((deduped) => deduped.category === items.category)
    )
    // Sort items
    .sort();

  // Removes duplicate properties | type
  const productTypes = products
    .filter(
      (items, index, self) =>
        index === self.findIndex((deduped) => deduped.type === items.type)
    )
    // Sort items
    .sort();

  // Filter products by product category
  const CategoryFilter = () => {
    if (products.length !== null) {
      return (
        <>
          {productCategories.map((categories) => (
            <Tab.Pane key={categories.category} eventKey={categories.category}>
              <ProductTable
                data={products
                  .filter((pane) => pane.category === categories.category)
                  .map((product) => ProductRow(product))}
              />
            </Tab.Pane>
          ))}
        </>
      );
    }
    return <Loader />;
  };

  // Filter products by product types
  const TypeFilter = () => {
    if (products.length !== null) {
      return (
        <>
          {productTypes.map((types) => (
            <Tab.Pane key={types.type} eventKey={types.type}>
              <ProductTable
                data={products
                  .filter((pane) => pane.type === types.type)
                  .map((product) => ProductRow(product))}
              />
            </Tab.Pane>
          ))}
        </>
      );
    }
    return <Loader />;
  };

  // Display table based on clicked product category/type
  // eslint-disable-next-line
  const TableRoutes = () => {
    return (
      <>
        <Tab.Pane eventKey="default">
          <ProductTable data={products.map((product) => ProductRow(product))} />
        </Tab.Pane>
        <CategoryFilter />
        <TypeFilter />
      </>
    );
  };

  return (
    <>
      {/* Display 'categories' component */}
      <Categories
        categories={
          // list `category` data
          productCategories.map((product) => (
            <Nav.Item key={product.category}>
              <Nav.Link eventKey={product.category}>
                {product.category}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        types={
          // list `type` data
          productTypes.map((product) => (
            <Nav.Item key={product.type}>
              <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
            </Nav.Item>
          ))
        }
        tables={<TableRoutes />}
      />
      <Notification
        delay={10000}
        title="Notice"
        message="This is a mock data until API's problem is resolved. ~99 Products is too much for client-side loading, ~1m hang time."
      />
    </>
  );
}
