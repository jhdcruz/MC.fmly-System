/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faGlobe,
  faHistory,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import EntryActions from '../common/EntryActions';
import Tag from '../common/Tag';

const FormatDate = lazy(() => import('../../utils/formatDate'));

const CardBlock = styled(Card)`
  display: inline-block;
  width: max-content;
  min-width: 20rem;
  max-width: 29rem;
  height: max-content;
  padding: 1rem 1.5rem !important;
  margin: 0.5rem !important;
  color: #d2d2d2;
  background-color: #222126;
  box-shadow: 3px 3px 8px #1b1b1b;
  border: 3px solid transparent;
  border-radius: 0.3rem;
  vertical-align: top;
  z-index: 1;

  :hover,
  :active,
  :focus {
    background-color: #161518;
    border: 3px ridge #e6a195;
    border-radius: 0.3rem;
    outline: none;

    button {
      visibility: visible;
    }
  }

  // * Card Body
  .card-body {
    padding: 1rem 0 0.5rem 0;
    border: none;
    border-bottom: 2px solid #e6a195 !important;

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
    }

    :hover,
    :active,
    :focus {
      background-color: transparent;

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
    border: none;

    #tags {
      display: flex;
      overflow: auto;
      vertical-align: middle;
      padding: 0.5rem 0 0;
    }

    hr {
      border: 1px solid #e6a195 !important;
      margin: 0 !important;
    }
  }

  // * Card Footer
  .card-footer {
    padding: 1rem 0 0 0;
    border: none;
    border-top: 2px solid #e6a195 !important;
  }
`;

const CardLink = styled(Card.Link)`
  font-size: 1rem;
  color: #e6a195;

  :hover {
    color: #9b6b65;
  }
`;

export default function Poster(supplier, edit, del) {
  return (
    <CardBlock tabIndex={0}>
      <Card.Body>
        <Card.Title>
          <Image src={supplier.icon} width={40} height={40} />
          <strong>{supplier.name} </strong>
          {supplier.website ? (
            <CardLink href={supplier.website} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGlobe} />
            </CardLink>
          ) : (
            ''
          )}
          {/* Control Buttons */}
          <EntryActions edit={edit} delete={del} />
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <CardLink
            href={`https://www.google.com/maps/place/${supplier.address}`}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {supplier.address}
          </CardLink>
          <CardLink className="float-right text-muted">
            <FontAwesomeIcon icon={faPhone} /> {supplier.contact}
          </CardLink>
        </ListGroupItem>
        <ListGroupItem>{supplier.description}</ListGroupItem>
        <hr />
        <ListGroupItem id="tags">
          <span className="text-muted pt-1 pr-1">Tags: </span>
          {supplier.category.map((category) => (
            <Tag variant="dark" index={category} content={category} />
          ))}
        </ListGroupItem>
      </ListGroup>
      <Card.Footer>
        <FontAwesomeIcon icon={faCalendarAlt} />{' '}
        <FormatDate
          format="D MMM YYYY"
          fromNow={true}
          date={supplier.updatedAt}
        />
        <span style={{ float: 'right' }}>
          <FontAwesomeIcon icon={faHistory} />{' '}
          <FormatDate fromNow={true} date={supplier.updatedAt} />
        </span>
      </Card.Footer>
    </CardBlock>
  );
}
