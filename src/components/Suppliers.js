/*
 *     MC.fmly Inventory System
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

import useSuppliers from '../hooks/useSuppliers';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

const SuppliersCard = styled(CardDeck)`
  margin: 1rem;
  padding: 1rem;

  .card {
    background-color: #1e1e1e;
    color: #d2d2d2;
    box-shadow: 0 3px 6px #232323;
    padding: 2px;
    margin: 1rem;
    height: max-content;
  }

  .card-body {
    padding: 1rem 1.25rem 0.5rem 1.25rem;

    img {
      border-radius: 12px;
      margin-right: 10px;
    }

    strong {
      vertical-align: middle;
    }
  }

  .list-group-flush,
  .list-group-item {
    background-color: #1e1e1e;
    color: #d2d2d2;
    border-top: 1px solid #565656 !important;
    border-bottom: 1px solid #565656 !important;
  }
`;

const CardLink = styled(Card.Link)`
  color: #2579f6;
`;

export default function Suppliers() {
  const [suppliers] = useSuppliers();

  return (
    <SuppliersCard>
      {suppliers &&
        suppliers
          .map((supplier) => (
            <Card>
              <Card.Body>
                <Card.Title>
                  <Image
                    src={supplier.icon}
                    alt="Supplier Icon"
                    width={50}
                    height={50}
                  />
                  <strong>{supplier.name}</strong>
                </Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{supplier.description}</ListGroupItem>
                <ListGroupItem>
                  <i>{supplier.type}</i>
                </ListGroupItem>
                <ListGroupItem>{supplier.address}</ListGroupItem>
              </ListGroup>
              <Card.Footer>
                <CardLink href={supplier.website}>Websites</CardLink>
                <CardLink className="text-muted float-right" href="#">
                  {supplier.contact}
                </CardLink>
              </Card.Footer>
            </Card>
          ))
          .reverse()}
    </SuppliersCard>
  );
}
