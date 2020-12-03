/*
 *     MC.fmly Inventory Management System
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

import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import placeholder from '../../assets/img/logo.svg';

const CardContainer = styled(Card)`
  width: 100%;
  height: max-content !important;
  color: #eccec9;
  cursor: pointer;
  margin: 1rem 0.5rem 0 0;
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
