/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// GET updates from repo
import { ListGroup } from 'react-bootstrap';
import Updates from '../../components/SysInfo/Updates';
import { Loader } from '../../components/common/Loader';
import { ListContainer } from '../../components/SysInfo/modules/SysInfo';
import { ReleasesApi } from '../../api/github/Releases';

/*****************************************************
 * * Get releases from project repository (GitHub API)
 *****************************************************/

export default function Release() {
  const { data } = ReleasesApi();

  return (
    <ListContainer>
      <ListGroup
        style={{
          paddingBottom: '4.3rem'
        }}
      >
        {data && true ? (
          data && data.map((release) => Updates(release))
        ) : (
          <Loader />
        )}
      </ListGroup>
    </ListContainer>
  );
}
