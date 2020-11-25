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

import { useState } from 'react';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import ProductForm from './forms/ProductForm';
import SearchBar from './common/SearchBar';

// * Styled Components
const CatalogGrid = styled(Row)`
  display: flex;
  height: 100%;
  overflow: hidden !important;
`;

const CategoryList = styled(Col)`
  position: fixed;
  top: 96%;
  transform: translateY(-100%);
  max-width: 12rem;
  margin: 2rem 5rem 0 1rem;
  padding: 5rem 1rem 1rem 1.2rem;
  color: whitesmoke;
  background-color: #222126;
  border-right: 4px ridge #e6a195;
  box-shadow: -1px 0 6px #232323;
  z-index: 9;
  height: 105vh;
  overflow-y: auto;
  white-space: nowrap;

  hr {
    border-top: 2px solid #e6a195;
    margin: 1rem 0;
  }

  a {
    margin: 0 !important;
    border-radius: 1.6rem;
    color: #d7b9b4;
    white-space: nowrap;
    outline: none;

    :hover {
      border-left: 2px outset #eccec9;
      background-color: #303030;
      box-shadow: 2px 5px 7px #222222;
      outline: none;
    }
  }

  .nav-link.active {
    color: #eccec9;
    border-left: 2px inset #d7b9b4;
    background-color: #333333;
    box-shadow: 2px 5px 7px #222222;
    text-shadow: 2px 5px 3px #222222;
    white-space: nowrap;
  }
`;

const CategoryTable = styled(Col)`
  overflow: auto !important;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin-left: 13.2rem;
`;

const CategoryLine = styled.label`
  margin: 5px 0 10px 8px;
  font-size: 14px;
  color: #d2d2d2;
`;

export default function Categories(props) {
  // * Modal Handlers
  const [modal, showModal] = useState(false);
  const handleClose = () => showModal(false);

  return (
    <Tab.Container id="CategorySection" defaultActiveKey="default">
      <CatalogGrid>
        <CategoryList sm={2}>
          <Nav variant="pills" className="flex-column">
            <CategoryLine>Category</CategoryLine>
            <Nav.Item>
              <Nav.Link eventKey="default">All</Nav.Link>
            </Nav.Item>
            {props.categories}
            <hr />
            <CategoryLine>Types</CategoryLine>
            {props.types}
          </Nav>
        </CategoryList>
        <CategoryTable>
          {/* Product Form Modal */}
          <ProductForm
            header="Add new product"
            show={modal}
            onHide={() => showModal(false)}
            save={handleClose} // TODO: POST data
            cancel={handleClose}
          />
          {/* Searchbar */}
          <SearchBar
            modal={() => {
              showModal(true);
            }}
            filter={
              <>
                <Dropdown.Item href="#">Code</Dropdown.Item>
                <Dropdown.Item href="#">Name</Dropdown.Item>
              </>
            }
          />
          {/* Table dynamic data*/}
          <Tab.Content>{props.tables}</Tab.Content>
        </CategoryTable>
      </CatalogGrid>
    </Tab.Container>
  );
}
