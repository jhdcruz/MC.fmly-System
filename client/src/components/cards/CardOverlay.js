/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import placeholder from '../../assets/img/logo.svg';

const CardContainer = styled(Card)`
  width: 100%;
  height: max-content !important;
  color: #eccec9;
  cursor: pointer;
  margin: 0 0.5rem 1rem 0;
  border-radius: 0.3rem;
  background-color: #222126;
  box-shadow: 3px 3px 8px #1b1b1b;

  .card-img-overlay {
    padding: 1rem;
    margin-left: 7.2vw;

    .card-title {
      font-size: 1.3vw;
    }

    .card-text {
      font-size: 1.2vw;
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

const CardImage = styled(Card.Img)`
  height: 20vh;
  width: 14vh;
  margin: auto 0.5rem;
`;

export default function CardOverlay(props) {
  return (
    <CardContainer key={props.key} onClick={props.action}>
      <CardImage src={placeholder} alt="Image" />
      <Card.ImgOverlay>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.footer}</Card.Text>
      </Card.ImgOverlay>
    </CardContainer>
  );
}
