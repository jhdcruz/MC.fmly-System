/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { TooltipControl } from './Controls';
import {
  faBars,
  faCloudUploadAlt,
  faDownload,
  faPlus,
  faThLarge,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

/**************************************
 * * Searchbar w/ Default Controls
 **************************************/

const ControlSection = styled.div`
  display: inline-flex;
  width: min-content;
  height: max-content;
  padding: 0.5rem 0.75rem;
  overflow: hidden;
`;

const Toolbar = styled(ControlSection)`
  background-color: #222126;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  border-radius: 0.25rem;
  box-shadow: 1px 2px 5px #1b1b1b;
`;

const Divider = styled.div`
  border: none;
  border-right: 2px solid #e6a195;
  margin: 0;
  padding: 0;
`;

const SearchControls = memo((props) => {
  return (
    <ControlSection>
      <SearchBar />

      <Toolbar>
        <TooltipControl
          placement="bottom"
          tooltip="Add"
          action={props.addModal}
          icon={faPlus}
        />
        <TooltipControl
          placement="bottom"
          tooltip="Bulk Delete"
          action={props.bulkDelete}
          icon={faTrash}
        />

        <Divider />

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

        <Divider />

        {/* Additional Controls */}
        <TooltipControl
          placement="bottom"
          tooltip="Import"
          action={props.import}
          icon={faCloudUploadAlt}
        />

        <TooltipControl
          placement="bottom"
          tooltip="Export"
          action={props.export}
          icon={faDownload}
        />
      </Toolbar>
    </ControlSection>
  );
});

export default SearchControls;
