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

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = styled.div`
  width: 30vw;
  margin: 3rem 2rem 0 1.5rem;
  position: fixed;
  box-shadow: 0 0 12px #eccec9;

  .search-icons {
    background-color: #1e1e1e;
    color: whitesmoke !important;
    padding: 0 10px;
  }

  a {
    color: whitesmoke;
  }

  input {
    margin: 0;
    font-size: 1.3vw;
    background-color: #232323;
    color: whitesmoke;
    border: none;
    border-right: 2px inset #d7b9b4;

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
`;

export default function SearchBar() {
  return (
    <Search>
      <InputGroup>
        <FormControl
          placeholder="search products..."
          aria-describedby="searchbar"
        />
        <InputGroup.Append>
          <InputGroup.Text className="search-icons" as="button">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <InputGroup.Text className="search-icons" as="button">
            <Link to="/recent">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Search>
  );
}
