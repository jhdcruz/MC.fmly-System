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

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const CategoryLabels = styled(Col)`
  width: 16rem;
  margin: 1rem 1.3rem;
  padding: 1rem 1rem 1rem 1.7rem;
  color: whitesmoke;
  background-color: #232323;
  box-shadow: -1px 0 6px #232323;
  border-radius: 1.6rem;
  z-index: 9;
  height: 89vh;
  overflow-y: scroll;

  a {
    margin: 0 !important;
    border-radius: 1.6rem;
    color: #bf9f9a;

    :hover {
      border-left: 2px outset #d7b9b4;
      background-color: #303030;
      box-shadow: 2px 5px 7px #222222;
    }
  }

  .nav-link.active {
    border-left: 2px inset #d7b9b4;
    background-color: #333333;
    box-shadow: 2px 5px 6px #222222;
  }
`;

const CategoryLine = styled.label`
  margin: 10px 0 5px 8px;
  font-size: 14px;
  color: #a4a4a4;
`;

const Categories = () => {
  return (
    <Tab.Container id="CategorySection" defaultActiveKey="all">
      <Row>
        <CategoryLabels>
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
        </CategoryLabels>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="all">test</Tab.Pane>
            <Tab.Pane eventKey="editing">test2</Tab.Pane>
            <Tab.Pane eventKey="printing">test2</Tab.Pane>
            <Tab.Pane eventKey="stickers">test2</Tab.Pane>
            <Tab.Pane eventKey="tops">test2</Tab.Pane>
            <Tab.Pane eventKey="dress">test2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Categories;
