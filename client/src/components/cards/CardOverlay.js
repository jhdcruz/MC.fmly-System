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
  font-size: 1.2vw;
  color: #c4c4c4;
  background-color: #222126;
`;

export default function CardOverlay(props) {
  return (
    <CardContainer>
      <Card.Img src={placeholder} alt="Image" />
      <Card.ImgOverlay>
        <Card.Title>
          {props.title} {props.subtitle}
        </Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>{props.footer}</Card.Text>
      </Card.ImgOverlay>
    </CardContainer>
  );
}
