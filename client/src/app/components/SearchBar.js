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

/* =============================
 * CURRENTLY NOT IN USE
 * =============================
 */

import React from 'react';
import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ItemDivider = styled(Dropdown.Divider)`
  margin: 0;
`;

const SearchLabel = styled.label`
  font-size: 15px;
  margin: 0 0 0 10px;
  padding: 5px 5px 3px 5px;
`;

const DropdownItem = styled(Dropdown.Item)`
  padding: 6px 15px;
`;

export default function SearchBar() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="Searchbar">Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="basic-url" aria-describedby="basic-addon3" />

        <DropdownButton
          as={InputGroup.Append}
          variant="outline-secondary"
          title={this.state.filter ? null : 'Filter'}
          id="input-group-dropdown-2"
        >
          <SearchLabel>Filter by:</SearchLabel>
          <DropdownItem id="code" onClick={this.state.filter ? null : '# Code'}>
            # Code
          </DropdownItem>
          <ItemDivider />
          <DropdownItem id="name" onClick={this.state.filter ? null : 'Name'}>
            Name
          </DropdownItem>
          <ItemDivider />
          <DropdownItem id="type" onClick={this.state.filter ? null : 'Type'}>
            Type
          </DropdownItem>
          <ItemDivider />
          <DropdownItem
            id="quantity"
            onClick={this.state.filter ? null : 'Quantity'}
          >
            Quantity
          </DropdownItem>
        </DropdownButton>
      </InputGroup>
    </>
  );
}