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
import SearchBar from './common/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { Control } from './Control';

/**************************************
 * * Searchbar w/ Add & View Controls
 **************************************/

const ControlSection = styled.div`
  display: inline-flex;
  width: 92vw;
  height: max-content;
  margin: 0.3rem 1rem 0;
  padding: 0 0.5rem;
  overflow: hidden;
`;

export default function SearchControls({ modal }) {
  return (
    <ControlSection>
      <SearchBar />
      <Control onClick={modal}>
        <FontAwesomeIcon icon={faPlus} />
      </Control>

      {/* Views Types */}
      <Control>
        <FontAwesomeIcon icon={faBars} />
      </Control>
      <Control>
        <FontAwesomeIcon icon={faThLarge} />
      </Control>
    </ControlSection>
  );
}
