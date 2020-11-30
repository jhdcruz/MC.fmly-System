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
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

/*************************************
 * * Entry/Data Modification Buttons
 *************************************/

// * Buttons Container
const EntryButtons = styled.div`
  margin: 0 auto;
  width: max-content;
  height: max-content;
`;

// * Entry Buttons
const EntryControl = styled(Button)`
  visibility: hidden;
  padding: 5px 10px;
  margin: 0 3px;
  font-size: 1.1vw;
  border: none;
`;

export default function EntryActions(props) {
  return (
    <span className="actions">
      <EntryButtons>
        {/* Modal Action Icons */}
        <EntryControl variant="outline-danger" onClick={props.delete}>
          <FontAwesomeIcon icon={faTimes} />
        </EntryControl>
        <EntryControl variant="outline-success" onClick={props.edit}>
          <FontAwesomeIcon icon={faPen} />
        </EntryControl>
      </EntryButtons>
    </span>
  );
}
