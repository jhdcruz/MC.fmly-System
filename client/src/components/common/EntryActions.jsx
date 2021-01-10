/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
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
  font-size: 0.9rem;
  border: none;
`;

export default function EntryActions(props) {
  return (
    <span className="actions">
      <EntryButtons>
        {/* Modal Action Icons */}
        <span className="pl-2">
          <EntryControl variant="outline-danger" onClick={props.delete}>
            <FontAwesomeIcon icon={faTimes} />
          </EntryControl>
          <EntryControl variant="outline-success" onClick={props.edit}>
            <FontAwesomeIcon icon={faPen} />
          </EntryControl>
        </span>
      </EntryButtons>
    </span>
  );
}
