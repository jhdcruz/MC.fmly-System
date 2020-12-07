/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// GET updates from repo
import { ListGroup } from 'react-bootstrap';
import Releases from '../../services/github/Releases';
import Updates from '../../components/system/Updates';
import Loader from '../../components/common/Loader';
import { ListContainer } from '../../components/system/__system.module';

/*****************************************************
 * * Get releases from project repository (GitHub API)
 *****************************************************/

export default function Release() {
  const [releases] = Releases();

  return (
    <ListContainer>
      <ListGroup
        style={{
          paddingBottom: '4.3rem'
        }}
      >
        {releases && true ? (
          releases && releases.map((release) => Updates(release))
        ) : (
          <Loader />
        )}
      </ListGroup>
    </ListContainer>
  );
}
