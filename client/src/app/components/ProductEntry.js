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

import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TableRow = styled.tr`
  color: white;
  background-color: #232323;
  border-radius: 1rem;
  box-shadow: 0 3px 5px #232323;

  .code {
    padding-left: 1.2rem !important;
  }

  .stock {
    padding-top: 9px !important;
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
    }
  }

  p {
    display: flex;
    vertical-align: middle;
    margin: 0 15px 0 0;
    padding: 7px 0 0 0;
  }
`;

export default function ProductEntry() {
  return (
    <TableRow className="product">
      <TableData className="code" colSpan="1">
        <FormControl placeholder="# Code" type="string" />
      </TableData>
      <TableData className="name">
        <FormControl placeholder="Item Name" type="string" />
      </TableData>
      <TableData className="type">
        <FormControl placeholder="Type" type="string" />
      </TableData>
      <TableData className="stock">
        <p>
          <FormControl placeholder="Quantity" type="number" min="0" />
          <Button variant="outline-info">
            <FontAwesomeIcon icon={faSave} />
          </Button>
        </p>
      </TableData>
    </TableRow>
  );
}
