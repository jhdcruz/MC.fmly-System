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

import { FC } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import Loader from '../components/common/Loader';
import Categories from '../components/Categories';
import ExtendedTable from '../components/tables/ExtendedTable';
import ExtendedProduct from '../components/tables/ExtendedProduct';
import Notification from '../components/common/Notification';
import useProducts from '../hooks/useProducts';

type catalogTypes = {
  category: any;
  type: any;
  pane: any;
  product: any;
};

const Catalog: FC = () => {
  const [products] = useProducts();

  // Removes duplicate properties | category
  const productCategories =
    products &&
    products
      .filter(
        (items: catalogTypes, index: any, self: any[]) =>
          index ===
          self.findIndex((deduped) => deduped.category === items.category)
      )
      // Sort items
      .reverse();

  // Removes duplicate properties | type
  const productTypes =
    products &&
    products
      .filter(
        (items: catalogTypes, index: any, self: any[]) =>
          index === self.findIndex((deduped) => deduped.type === items.type)
      )
      // Sort items
      .reverse();

  // Filter products by product category
  const categoryFilter: FC = () => {
    if (products && products.length !== 0) {
      return (
        <>
          {products &&
            productCategories.map((categories: catalogTypes) => (
              <Tab.Pane
                key={categories.category}
                eventKey={categories.category}
              >
                <ExtendedTable
                  data={
                    products &&
                    products
                      .filter(
                        (pane: catalogTypes) =>
                          pane.category === categories.category
                      )
                      .map((product: catalogTypes) => ExtendedProduct(product))
                  }
                />
              </Tab.Pane>
            ))}
        </>
      );
    }
    return <Loader />;
  };

  // Filter products by product types
  const typeFilter = () => {
    if (products && products.length !== 0) {
      return (
        <>
          {products &&
            productTypes.map((types: catalogTypes) => (
              <Tab.Pane key={types.type} eventKey={types.type}>
                <ExtendedTable
                  data={
                    products &&
                    products
                      .filter((pane: catalogTypes) => pane.type === types.type)
                      .map((product: catalogTypes) => ExtendedProduct(product))
                  }
                />
              </Tab.Pane>
            ))}
        </>
      );
    }
    return <Loader />;
  };

  // eslint-disable-next-line
  const TableRoutes: FC = () => {
    return (
      <>
        <Tab.Pane eventKey="default">
          <ExtendedTable
            data={
              products &&
              products.map((product: catalogTypes) => ExtendedProduct(product))
            }
          />
        </Tab.Pane>
        {categoryFilter}
        {typeFilter}
      </>
    );
  };

  return (
    <>
      <Categories
        categories={
          // list `category` data
          products &&
          productCategories.map((product: catalogTypes) => (
            <Nav.Item key={product.category}>
              <Nav.Link eventKey={product.category}>
                {product.category}
              </Nav.Link>
            </Nav.Item>
          ))
        }
        types={
          // list `type` data
          products &&
          productTypes.map((product: catalogTypes) => (
            <Nav.Item key={product.type}>
              <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
            </Nav.Item>
          ))
        }
        tables={<TableRoutes />}
      />
      <Notification
        title="Notice"
        time="System Guide"
        message="Products are fetched from the database. Category & Type lists are dynamic components and will update on new/deleted entries."
        delay={15000}
      />
      <Notification
        title="Navigation"
        time="System Guide"
        message="Scroll horizontally/vertically using Shift + Scroll or Two-finger touchpad drag, or by pressing/holding Scroll."
        delay={7000}
      />
    </>
  );
};

export default Catalog;
