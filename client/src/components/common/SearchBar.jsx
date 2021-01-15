/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import styled from 'styled-components';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/****************
 * * Searchbar
 ***************/

const Search = styled.div`
  width: 24.5rem;
  min-width: 10rem;
  height: max-content;
  margin: 0 0.5rem 0 0;
  background-color: #222126;
  color: #d2d2d2 !important;
  border-radius: 0.3rem;
  outline: none;
  z-index: 3;
  box-shadow: 3px 3px 8px #1b1b1b;
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
  font-size: 1.13rem;
  background-color: #222126;
  color: #d2d2d2;
  border: none;
  padding: 0.5rem 0.75rem;

  :hover {
    background-color: #121416;
  }

  ::placeholder {
    color: #c4c4c4;
    font-size: 1.1rem;
  }

  :active,
  :focus {
    background-color: #1b1e21;
    color: whitesmoke;
    border-color: #d7b9b4;
    box-shadow: none;
  }
`;

const SearchBar = memo(() => {
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
});
export default SearchBar;
