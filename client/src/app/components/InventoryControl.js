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

import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const InventoryControls = styled.div`
  display: inline;

  .left-control {
    float: left;
  }

  .right-control {
    float: right;
  }
`;

const ButtonGroup = styled.div`
  padding: 5px;
  margin: 5px 5px;
`;

const Control = styled(Button)`
  margin-right: 5px;
  font-size: 16px;
`;

export default function InventoryControl() {
  return (
    <>
      <InventoryControls fluid>
        <ButtonGroup className="left-control">
          <Control variant="outline-primary">Add Entry</Control>
          <Control variant="outline-secondary">Info</Control>
        </ButtonGroup>
      </InventoryControls>
      <InventoryControls fluid>
        <ButtonGroup className="right-control">
          <Control variant="outline-primary">Add Entry</Control>
          <Control variant="outline-secondary">Info</Control>
        </ButtonGroup>
      </InventoryControls>
    </>
  );
}
