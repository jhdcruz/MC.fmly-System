/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import styled from 'styled-components';
import { TooltipControl } from './Controls';
import SearchBar from './SearchBar';
import { faBars, faPlus, faThLarge } from '@fortawesome/free-solid-svg-icons';

/**************************************
 * * Searchbar w/ Default Controls
 **************************************/

const ControlSection = styled.div`
  display: inline-flex;
  width: min-content;
  height: max-content;
  margin: 0 1rem 0.5rem 0;
  padding: 0.3rem 0.5rem 0.5rem 0;
  overflow: hidden;
`;

export default function SearchControls(props) {
  return (
    <ControlSection>
      <SearchBar />

      {/* Add Entry Modal */}
      <TooltipControl
        placement="bottom"
        tooltip={props.add}
        action={props.modal}
        icon={faPlus}
      />

      {/* Views Types */}
      <TooltipControl
        placement="bottom"
        tooltip="List View"
        action={props.listView}
        icon={faBars}
      />
      <TooltipControl
        placement="bottom"
        tooltip="Card View"
        action={props.cardView}
        icon={faThLarge}
      />
    </ControlSection>
  );
}
