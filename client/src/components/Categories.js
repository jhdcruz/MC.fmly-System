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

import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import getProducts from '../services/productService';
import ExtendedProduct from './ExtendedProduct';
import Loader from './Loader';
import { NullItems } from './NarrowTable';
import ExtendedTable from './ExtendedTable';
import SearchBar from './SearchBar';

const CatalogGrid = styled(Row)`
  display: flex;
  overflow: auto !important;
`;

const CategoryList = styled(Col)`
  max-width: 9rem;
  margin: 1rem 3px 1rem 1.3rem;
  padding: 1rem 1rem 1rem 1.2rem;
  color: whitesmoke;
  background-color: #232323;
  box-shadow: -1px 0 6px #232323;
  border-radius: 1.6rem;
  z-index: 9;
  height: 90vh;
  overflow-y: auto;

  a {
    margin: 0 !important;
    border-radius: 1.6rem;
    color: #c4a39d;

    :hover {
      border-left: 2px outset #d7b9b4;
      background-color: #303030;
      box-shadow: 2px 5px 7px #222222;
    }
  }

  .nav-link.active {
    color: #e5cac6;
    border-left: 2px inset #d7b9b4;
    background-color: #333333;
      box-shadow: 2px 5px 7px #222222;
    text-shadow: 2px 5px 3px #222222;
  }
`;

const CategoryTable = styled(Col)`
  overflow: auto;
  width: 100%;
  padding: 0;
`;

const CategoryLine = styled.label`
  margin: 10px 0 5px 8px;
  font-size: 14px;
  color: #d2d2d2;
`;

export default function Categories() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!products) {
      fetchProducts().catch((err) => {
        console.error(err);
      });
    }
  });

  const fetchProducts = async () => {
    let res = await getProducts.getAll();
    setProducts(res);
  };

  const verifyProducts = () => {
    return (
      <>
        {products && products.length >= 1 ? (
          products.map((products) => ExtendedProduct(products))
        ) : (
          <Loader />
        )}
      </>
    );
  };

  const ShowTable = () => {
    return (
      <ExtendedTable
        data={
          products && products.length === 0 ? (
            <NullItems> No products registered...</NullItems>
          ) : (
            verifyProducts()
          )
        }
      />
    );
  };

  return (
    <Tab.Container id="CategorySection" defaultActiveKey="all">
      <CatalogGrid>
        <CategoryList sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="all">All</Nav.Link>
            </Nav.Item>

            {/* Graphics Section*/}
            <CategoryLine>Graphics</CategoryLine>
            <Nav.Item>
              <Nav.Link eventKey="editing">Editing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="printing">Printing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="stickers">Stickers</Nav.Link>
            </Nav.Item>

            {/* Clothes Section */}
            <CategoryLine>Clothes</CategoryLine>
            <Nav.Item>
              <Nav.Link eventKey="tops">Tops</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="dress">Dress</Nav.Link>
            </Nav.Item>
          </Nav>
        </CategoryList>
        <CategoryTable>
          <SearchBar />
          <Tab.Content>
            <Tab.Pane eventKey="all">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="editing">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="printing">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="stickers">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="tops">
              <ShowTable />
            </Tab.Pane>
            <Tab.Pane eventKey="dress">
              <ShowTable />
            </Tab.Pane>
          </Tab.Content>
        </CategoryTable>
      </CatalogGrid>
    </Tab.Container>
  );
}
