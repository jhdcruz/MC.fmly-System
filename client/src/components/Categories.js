/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// * Styled Components
const CatalogGrid = styled(Row)`
  display: flex;
  height: 100%;
  overflow: hidden !important;
`;

const CategoryList = styled(Col)`
  position: absolute;
  width: 12.6rem;
  max-width: 12.6rem;
  margin: 0 5rem 0 1rem;
  padding: 3rem 0.8rem 1rem 1.2rem;
  color: whitesmoke;
  background-color: #222126;
  border-right: 3px ridge #e6a195;
  box-shadow: -1px 0 6px #232323;
  z-index: 9;
  height: 100vh;
  overflow-y: auto;
  white-space: nowrap;
  text-overflow: ellipsis;

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

const CategoryContent = styled(Col)`
  width: 100%;
  height: 100vh;
  padding: 3rem 0 1rem 1rem;
  margin: 0 0.5rem 0 13.2rem;
  overflow: auto !important;
`;

const CategoryLine = styled.label`
  margin: 5px 0 10px 8px;
  font-size: 14px;
  color: #d2d2d2;
`;

export default function Categories(props) {
  return (
    <Tab.Container id="CategorySection" defaultActiveKey="default">
      <CatalogGrid>
        <CategoryList sm={2}>
          <Nav variant="pills" className="flex-column">
            <CategoryLine>{props.main}</CategoryLine>
            <Nav.Item>
              <Nav.Link eventKey="default">All</Nav.Link>
            </Nav.Item>
            {props.mainTabs}
            <hr />
            <CategoryLine>{props.secondary}</CategoryLine>
            {props.secondaryTabs}
          </Nav>
        </CategoryList>
        <CategoryContent>
          {/* Categories dynamic content*/}
          <Tab.Content>{props.content}</Tab.Content>
        </CategoryContent>
      </CatalogGrid>
    </Tab.Container>
  );
}
