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

import styled from 'styled-components';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const TableRow = styled.tr`
  color: white;
  background-color: #1e1e1e;
  border-radius: 1rem;
  box-shadow: 0 3px 5px #232323;

  .code {
    padding-left: 1.2rem !important;
  }

  .stock {
    display: flex;
  }

  .stock input {
    width: 70%;
  }

  :hover {
    background-color: #181818 !important;

    button {
      visibility: visible;
    }
  }

  // Row's border-radius
  td:first-child {
    border-left-style: solid;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  td:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;

const TableData = styled.td`
  color: white;
  text-indent: 0.6rem;
  font-size: 1.2vw;
  padding: 1rem 0 1rem 1rem !important;
  border: none !important;
  text-align: left;

  input {
    font-size: 1.2vw;
    margin-right: 1rem;
    background-color: transparent;
    color: whitesmoke;

    ::placeholder {
      color: #c4c4c4;
      font-size: 1.2vw;
    }

    :active,
    :focus {
      font-size: 1.2vw;
      background-color: #1b1e21;
      color: whitesmoke;
      border-color: #d7b9b4;
      box-shadow: 0 0 7px #d7b9b4;
    }
  }
`;

export default function ProductEntry() {
  return (
    <TableRow className="product">
      <TableData className="code">
        <FormControl
          placeholder="# Code"
          type="string"
          minLength={2}
          maxLength={13}
        />
      </TableData>
      <TableData className="name" colSpan={2}>
        <FormControl
          placeholder="Item Name"
          type="string"
          minLength={2}
          maxLength={30}
        />
      </TableData>
      <TableData className="variant">
        <FormControl
          placeholder="Variant"
          type="string"
          minLength={2}
          maxLength={30}
        />
      </TableData>
      <TableData className="type">
        <FormControl
          placeholder="Type"
          type="string"
          minLength={2}
          maxLength={20}
        />
      </TableData>
      <TableData className="category">
        <FormControl
          placeholder="Category"
          type="string"
          minLength={2}
          maxLength={20}
        />
      </TableData>
      <TableData className="stock">
        <FormControl placeholder="Quantity" type="number" min={0} />
        <Button variant="outline-success">
          <FontAwesomeIcon icon={faSave} />
        </Button>
      </TableData>
    </TableRow>
  );
}