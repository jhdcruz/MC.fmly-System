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
import { Control } from './Control';
import SearchBar from './common/SearchBar';
import { faBars, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';

/**************************************
 * * Searchbar w/ Default Controls
 **************************************/

const ControlSection = styled.div`
  display: inline-flex;
  width: 92vw;
  height: max-content;
  margin: 0 1rem 0;
  padding: 0.3rem 0.5rem;
  overflow: hidden;
`;

export default function SearchControls(props) {
  return (
    <ControlSection>
      <SearchBar />

      {/* Add Entry Modal */}
      <Control
        placement="bottom"
        tooltip={props.add}
        action={props.modal}
        icon={faPlus}
      />

      {/* Views Types */}
      <Control
        placement="bottom"
        tooltip={props.list}
        action={props.listView}
        icon={faBars}
      />
      <Control
        placement="bottom"
        tooltip={props.card}
        action={props.cardView}
        icon={faThLarge}
      />
    </ControlSection>
  );
}
