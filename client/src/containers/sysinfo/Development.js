/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { ListGroup } from 'react-bootstrap';
import Commit from '../../components/system/Commit';
import Commits from '../../services/github/Commits';
import Loader from '../../components/common/Loader';
import { ListContainer } from '../../components/system/__system.module';

/*****************************************************
 * * Get commits from project repository (GitHub API)
 *****************************************************/

export default function Development() {
  const [commits] = Commits();

  return (
    <ListContainer>
      <ListGroup
        style={{
          paddingBottom: '4.3rem'
        }}
      >
        {commits && true ? (
          commits && commits.map((commit) => Commit(commit))
        ) : (
          <Loader />
        )}
      </ListGroup>
    </ListContainer>
  );
}
