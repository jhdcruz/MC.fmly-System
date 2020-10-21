/*
 *     MC Inventory Management System
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

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const InventoryControls = styled.div`
  display: inline-block;
  margin: 5px 4rem 10px 4rem;
`;

// const ButtonGroup = styled.div`
//   padding: 5px;
//   margin: 5px 5px;
// `;
//
// const Control = styled(Button)`
//   margin-right: 5px;
//   font-size: 16px;
//   border: none;
// `;

const TableControls = styled(Button)`
  @extend Control;
  background-color: #0091ff;
  color: white;
  border: none;
  border-radius: 20px;
`;

export default function InventoryControl() {
  return (
    <>
      <InventoryControls classname="IControl" fluid>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <TableControls variant="outline-primary">Add Entry</TableControls>
            <TableControls variant="outline-secondary">Info</TableControls>
          </InputGroup.Prepend>
          <InputGroup.Append>
            <FontAwesomeIcon icon={faInfoCircle} />
          </InputGroup.Append>
        </InputGroup>
      </InventoryControls>
    </>
  );
}
