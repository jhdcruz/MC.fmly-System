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

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../components/Categories';
import ProductHeader from '../components/tables/ProductHeader';
import ProductCatalog from '../components/tables/ProductCatalog';
import ProductService from '../services/ProductService';
import Loader from '../components/common/Loader';

export default function Catalog() {
  const [products] = ProductService();

  // * Removes duplicate properties | category
  const productCategories =
    products &&
    products
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.category === items.category)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | type
  const productTypes =
    products &&
    products
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.type === items.type)
      )
      // Sort items
      .reverse();

  // * Filter products by product category
  const CategoryFilter = () => {
    if (products && products.length !== null) {
      return (
        <>
          {products &&
            productCategories.map((categories) => (
              <Tab.Pane
                key={categories.category}
                eventKey={categories.category}
                style={{ marginTop: '6rem' }}
              >
                <ProductHeader
                  map={products && products._id}
                  data={
                    products &&
                    products
                      .filter((pane) => pane.category === categories.category)
                      .map((product) => ProductCatalog(product))
                  }
                />
              </Tab.Pane>
            ))}
        </>
      );
    }
    return <Loader />;
  };

  // * Filter products by product types
  const TypeFilter = () => {
    if (products && products.length !== null) {
      return (
        <>
          {products &&
            productTypes.map((types) => (
              <Tab.Pane
                key={types.type}
                eventKey={types.type}
                style={{ marginTop: '6rem' }}
              >
                <ProductHeader
                  _id={products && products._id}
                  data={products
                    .filter((pane) => pane.type === types.type)
                    .map((product) => ProductCatalog(product))}
                />
              </Tab.Pane>
            ))}
        </>
      );
    }
    return <Loader />;
  };

  // * Display table based on clicked product category/type
  // eslint-disable-next-line
  const TableRoutes = () => {
    return (
      <>
        <Tab.Pane eventKey="default" style={{ marginTop: '2rem' }}>
          <ProductHeader
            _id={products && products._id}
            data={
              products && products.map((product) => ProductCatalog(product))
            }
          />
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
          products &&
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
          productTypes &&
          productTypes.map((product) => (
            <Nav.Item key={product.type}>
              <Nav.Link eventKey={product.type}>{product.type}</Nav.Link>
            </Nav.Item>
          ))
        }
        tables={<TableRoutes />}
      />
    </>
  );
}
