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
import {
  faGlobe,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import EntryActions from '../common/EntryActions';
import Tag from '../common/Tag';

const CardBlock = styled(Card)`
  display: inline-block;
  width: 37vw;
  height: max-content;
  padding: 1rem 1.5rem !important;
  margin: 0.3rem 1rem 0 0 !important;
  color: #d2d2d2;
  background-color: #222126;
  box-shadow: 3px 3px 8px #1b1b1b;
  border-radius: 0.3rem;
  vertical-align: top;
  border: 2px outset #e6a195;
  z-index: 1;

  :hover {
    background-color: #121416;
  }

  // * Card Body
  .card-body {
    padding: 1rem 0 0.5rem 0;

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

  .list-group-flush,
  .list-group-item {
    background-color: transparent;
    color: #d2d2d2;
    padding: 0.5rem 0;

    #tags {
      display: flex;
      overflow: auto;
      vertical-align: middle;
    }

    :hover {
      background-color: #121416;

      button {
        visibility: visible;
      }
    }

    hr {
      border: 1px solid #e6a195 !important;
      margin: 0 !important;
    }
  }

  // * Card Footer
  .card-footer {
    padding: 1rem 0 0 0;
  }
`;

const CardLink = styled(Card.Link)`
  font-size: 1rem;
  color: #e6a195;

  :hover {
    color: #9b6b65;
  }
`;

export default function Poster(props) {
  return (
    <CardBlock>
      <Card.Body>
        <Card.Title>
          <Image src={props.icon} width={40} height={40} />
          <strong>{props.name} </strong>
          {props.website ? (
            <CardLink href={props.website} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGlobe} />
            </CardLink>
          ) : (
            ''
          )}
          {/* Control Buttons */}
          <EntryActions edit={props.edit} delete={props.delete} />
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.description}</ListGroupItem>
        <hr />
        <ListGroupItem id="tags">
          <span className="text-muted">Tags: </span>
          {props.category.map((category) => (
            <Tag variant="dark" index={category} content={category} />
          ))}
        </ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <CardLink href={`https://www.google.com/maps/place/${props.address}`}>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.address}
        </CardLink>
        <CardLink className="float-right text-muted">
          <FontAwesomeIcon icon={faPhone} /> {props.contact}
        </CardLink>
      </Card.Footer>
    </CardBlock>
  );
}
