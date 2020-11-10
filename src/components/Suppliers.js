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

export default function Suppliers() {
  const [suppliers] = useSuppliers();

  return (
    <>
      <CardDeck>
        {suppliers &&
          suppliers.map((supplier) => (
            <Card>
              <Card.Img variant="top dark" src={supplier.icon} />
              <Card.Body>
                <Card.Title>{supplier.name}</Card.Title>
                <Card.Text>{supplier.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{supplier.type}</ListGroupItem>
                <ListGroupItem>{supplier.address}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">{supplier.website}</Card.Link>
                <Card.Link href="#">{supplier.contact}</Card.Link>
              </Card.Body>
            </Card>
          ))}
      </CardDeck>
    </>
  );
}
