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

import { ListGroup } from 'react-bootstrap';
import Commit from '../components/system/Commit';
import Commits from '../services/github/Commits';
import Loader from '../components/common/Loader';
import { ListContainer } from '../components/system/__system.module';

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
