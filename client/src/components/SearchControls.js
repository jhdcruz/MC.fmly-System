/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
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
  margin: 0 1rem 0.5rem;
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
        tooltip="List View"
        action={props.listView}
        icon={faBars}
      />
      <Control
        placement="bottom"
        tooltip="Card View"
        action={props.cardView}
        icon={faThLarge}
      />
    </ControlSection>
  );
}
