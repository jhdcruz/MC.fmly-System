/*
 *     MC.fmly Inventory System
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

import { Image, ListGroup } from 'react-bootstrap';
import Moment from 'react-moment';
import Commits from '../../services/github/Commits';
import { ListContainer, ListGroupItem } from './__system.module';

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
        {
          commits &&
            commits.map((commit) => (
              <>
                {/* List updates */}
                <ListGroupItem key={commit.sha}>
                  <div
                    style={{
                      display: 'flex'
                    }}
                  >
                    <Image
                      src={commit.committer.avatar_url}
                      width={50}
                      height={50}
                      style={{
                        borderRadius: '0.7rem',
                        marginRight: '1rem'
                      }}
                    />
                    <p className="mr-3 mt-2">{commit.commit.committer.name}</p>
                    <a
                      className="mt-2"
                      href={commit.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {commit.commit.message}
                    </a>
                  </div>
                  <div className="mt-2">
                    <pre className="float-left">{commit.sha}</pre>
                    <p className="float-right">
                      <Moment fromNow date={commit.commit.committer.date} />
                    </p>
                  </div>
                </ListGroupItem>
              </>
            ))
          // Limit to last 15 result (descending)
          // .slice(0, 15)
        }
      </ListGroup>
    </ListContainer>
  );
}
