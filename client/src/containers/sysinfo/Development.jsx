/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { ListGroup } from 'react-bootstrap';
import Commit from '../../components/system/Commit';
import { Loader } from '../../components/common/Loader';
import { ListContainer } from '../../components/system/System.module';
import { CommitsApi } from '../../api/github/Commits';

/*****************************************************
 * * Get commits from project repository (GitHub API)
 *****************************************************/

export default function Development() {
  const { data } = CommitsApi();

  return (
    <ListContainer>
      <ListGroup
        style={{
          paddingBottom: '4.3rem'
        }}
      >
        {data && true ? (
          data && data.map((commit) => Commit(commit))
        ) : (
          <Loader />
        )}
      </ListGroup>
    </ListContainer>
  );
}
