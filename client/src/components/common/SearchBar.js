/*
 *     MC.fmly Inventory Management System
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = styled.div`
  width: 30vw;
  background-color: #222126;
  color: #d2d2d2 !important;
  border-radius: 0.3rem;
  outline: none;
  z-index: 3;
  box-shadow: 3px 3px 8px #1b1b1b;

  button {
    border: none;

    :hover {
      background-color: #121416;
    }
  }

  .search-icon {
    background-color: #222126;
    color: #d2d2d2 !important;
    padding: 0 10px;
    outline: none;
    border: none;
    border-right: 3px ridge #e6a195;
  }
}

// Searchbar input
input {
  margin: 0;
  font-size: 1.3vw;
  background-color: #222126;
  color: #d2d2d2;
  border: none;

  :hover {
    background-color: #121416;
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
    box-shadow: none;
  }
`;

export default function SearchBar() {
  return (
    <Search>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text className="search-icon" as="div">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl placeholder="Search..." aria-describedby="searchbar" />
      </InputGroup>
    </Search>
  );
}
