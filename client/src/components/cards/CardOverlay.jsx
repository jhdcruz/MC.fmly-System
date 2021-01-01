/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import placeholder from '../../assets/img/logo.svg';

const CardContainer = styled(Card)`
  width: 25.5rem;
  min-height: 9rem;
  height: max-content !important;
  color: #eccec9;
  cursor: pointer;
  margin: 0 0.5rem 1rem 0;
  border: 3px solid transparent;
  border-radius: 0.3rem;
  word-break: keep-all;
  text-overflow: clip;
  background-color: #222126;
  display: inline-block;
  position: static;
  vertical-align: middle;
  box-shadow: 3px 3px 8px #1b1b1b;

  .card-img-overlay {
    width: max-content;
    height: max-content;
    margin: 0;
    padding: 1rem 1rem 1rem 0 !important;
    display: inline-block;
    vertical-align: middle;
    position: static;

    .card-title {
      font-size: 1.1rem;
      margin: 0;
    }

    .card-text {
      font-size: 1rem;
      margin: 0;
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
  width: max-content;
  min-width: 28rem;
  max-width: 40rem;
  height: max-content !important;
  color: #eccec9;
  background-color: #222126;
  cursor: pointer;
  margin: 0.8vw;
  border-radius: 0.3rem;
  border: 3px solid transparent !important;
  display: inline-block;
  position: static;
  vertical-align: middle;
  box-shadow: 3px 3px 8px #1b1b1b;
`;

const CardImage = styled(Card.Img)`
  width: 7.5rem;
  height: auto;
  margin: auto 0.5rem;
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
        <Card.Text className="mt-2">{props.date}</Card.Text>
      </Card.ImgOverlay>
    </CardBlock>
  );
};
