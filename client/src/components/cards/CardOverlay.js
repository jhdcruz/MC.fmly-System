/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import placeholder from '../../assets/img/logo.svg';

const CardContainer = styled(Card)`
  height: max-content !important;
  color: #eccec9;
  cursor: pointer;
  margin: 0 0.5rem 1rem 0;
  padding: 1.5rem 0.5rem 1rem;
  border-radius: 0.3rem;
  vertical-align: middle;
  background-color: #222126;
  box-shadow: 3px 3px 8px #1b1b1b;

  // * Reset bootstrap defaults
  position: static !important;
  display: block !important;

  .card-img-overlay {
    padding: 0;
    height: max-content;
    vertical-align: middle;
    display: inline-block;
    position: static;

    .card-title {
      font-size: 1.1rem;
    }

    .card-text {
      margin: 2.5vh 0;
    }
  }

  :hover {
    background-color: #161518;
    border: 3px ridge #e6a195 !important;
    border-radius: 0.3rem;
    outline: none;
  }
`;

const CardBlock = styled(CardContainer)`
  width: 35vw;
  height: 28vh !important;
  color: #eccec9;
  cursor: pointer;
  margin: 0.8vw;
  display: inline-block;
  border-radius: 0.3rem;
  background-color: #222126;
  box-shadow: 3px 3px 8px #1b1b1b;
`;

const CardImage = styled(Card.Img)`
  height: auto;
  width: 7rem;
  margin: auto 0.7rem 0.5rem 0;
`;

export const CardOverlay = (props) => {
  return (
    <CardContainer key={props.key} onClick={props.action}>
      <CardImage src={placeholder} alt="Item Logo" />
      <Card.ImgOverlay>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.footer}</Card.Text>
      </Card.ImgOverlay>
    </CardContainer>
  );
};

export const CardDeck = (props) => {
  return (
    <CardBlock key={props.key} onClick={props.action}>
      <CardImage src={placeholder} alt="Item Logo" />
      <Card.ImgOverlay>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.footer}</Card.Text>
        <Card.Text>{props.date}</Card.Text>
      </Card.ImgOverlay>
    </CardBlock>
  );
};
