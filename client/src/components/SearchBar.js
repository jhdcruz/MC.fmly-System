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

/* =============================
 * CURRENTLY NOT IN USE
 * =============================
 */

import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = styled.div`
  width: 30vw;
  margin: 1rem 2rem 0 1.5rem;
  position: fixed;
  box-shadow: 0 0 12px #d7b9b4;

  #search-icon {
    background-color: #232323;
    color: whitesmoke;
    border: none;
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
          <InputGroup.Text id="search-icon" as="button">
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Search>
  );
}