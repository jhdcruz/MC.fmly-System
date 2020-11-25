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
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = styled.div`
  width: 30vw;
  margin: 3rem 2rem 0 1.5rem;
  position: fixed;
  background-color: #222126;
  color: #d2d2d2 !important;
  border: 3px ridge #e6a195;
  border-radius: 0.3rem;
  outline: none;
  z-index: 3;


  button {
    border: none;

    :hover {
      background-color: #303030;
    }
  }

  .search-icon {
    background-color: #222126;
    color: #d2d2d2 !important;
    padding: 0 10px;
    outline: none;
    border-right: 3px ridge #e6a195;
  }

  .add-icon {
    background-color: #222126;
    color: #d2d2d2 !important;
    outline: none;
  }
}

// Dropdown
.dropdown-toggle {
  background-color: #222126;
  color: #d2d2d2;
  outline: none;
  border: none;
  border-right: 3px ridge #e6a195;

  :active {
    color: #d2d2d2 !important;
  }

  :hover {
    background-color: #303030;
  }
}

// Dropdown list popup
.show {
  background-color: #222126;
  color: #d2d2d2;
  box-shadow: 0 0 10px #eccec9;
  padding: 0;

  .dropdown-item {
    background-color: #222126;
    color: #d2d2d2;
    padding: 7px 15px;

    :hover {
      background-color: #303030;
    }
  }
}

// Searchbar input
input {
  margin: 0;
  font-size: 1.3vw;
  background-color: #222126;
  color: #d2d2d2;
  border: none;
  border-right: 2px inset #d7b9b4;
  border-radius: 5rem;

  :hover {
    background-color: #303030;
  }

  ::placeholder {
    color: #c4c4c4;
    font-size: 1.2vw;
  }

  :active,
  :focus {
    background-color: #1b1e21;
    color: whitesmoke;
    border-color: #d7b9b4;
    box-shadow: 0 0 7px #d7b9b4;
  }
`;

export default function SearchBar(props) {
  return (
    <Search>
      <InputGroup>
        {/*Dropdown Category*/}
        <DropdownButton
          as={InputGroup.Prepend}
          title="Filter"
          id="input-group-dropdown-1"
        >
          {props.filter}
        </DropdownButton>

        {/* Search Input */}
        <FormControl placeholder="Search" aria-describedby="searchbar" />

        {/* Icon */}
        <InputGroup.Append>
          <InputGroup.Text className="search-icon" as="button">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>

          {/* Modal Handler */}
          <InputGroup.Text
            className="add-icon"
            as="button"
            onClick={props.modal}
          >
            <FontAwesomeIcon icon={faPlus} />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Search>
  );
}