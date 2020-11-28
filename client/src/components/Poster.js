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
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faPen,
  faPhone,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

/*********************************
 * * Suppliers Card/Poster
 *********************************/

// * Styled components
const CardBlock = styled(Card)`
  background-color: #222126;
  color: #d2d2d2;
  box-shadow: 3px 3px 8px #1b1b1b;
  padding: 1rem !important;
  margin: 0.3rem 1rem 2rem 0 !important;
  height: max-content;
  border-radius: 0.3rem;
  border: 2px outset #e6a195;
  z-index: 1;

  :hover {
    background-color: #121416;
  }

  // * Card Body
  .card-body {
    padding: 1rem 1.25rem 0.5rem 1.25rem;

    img {
      border-radius: 12px;
      margin-right: 10px;
    }

    strong {
      vertical-align: middle;
    }

    button {
      float: right;
      border: none;
      visibility: hidden;
    }

    :hover {
      background-color: #121416;

      button {
        visibility: visible;
      }
    }
  }

  // * Card Line-seperated content
  .list-group-flush,
  .list-group-item {
    background-color: transparent;
    color: #d2d2d2;
    border-top: 1px solid #565656 !important;
    border-bottom: 1px solid #565656 !important;
  }

  // * Card Footer
  .card-footer {
    padding: 0.75rem 0.5rem 0;

    a {
      font-size: 1rem;
      color: #e6a195;

      :hover {
        color: #9b6b65;
      }
    }
  }
`;

const CardLink = styled(Card.Link)`
  color: #2579f6;
`;

export default function Poster(props) {
  return (
    <CardBlock tabIndex={0}>
      <Card.Body>
        <Card.Title>
          <Image src={props.icon} alt="Supplier Icon" width={40} height={40} />
          <strong>{props.name}</strong>
          {/* Control Buttons */}
          <Button variant="outline-danger" onClick={props.delete}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <Button variant="outline-success" onClick={props.edit}>
            <FontAwesomeIcon icon={faPen} />
          </Button>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.description}</ListGroupItem>
        <ListGroupItem>
          <i>{props.type}</i>
        </ListGroupItem>
        <ListGroupItem>{props.address}</ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <CardLink className="text-muted" href="#">
          <FontAwesomeIcon icon={faPhone} /> {props.contact}
        </CardLink>
        <CardLink
          className="float-right"
          href={props.website}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGlobe} />
        </CardLink>
      </Card.Footer>
    </CardBlock>
  );
}
