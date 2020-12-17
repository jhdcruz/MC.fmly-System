/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import EntryActions from '../common/EntryActions';

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

    .actions,
    button {
      float: right !important;
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
          <Image src={props.icon} width={40} height={40} />
          <strong>{props.name}</strong>
          {/* Control Buttons */}
          <EntryActions edit={props.edit} delete={props.delete} />
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
