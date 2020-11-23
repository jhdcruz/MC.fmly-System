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

// GET updates from repo
import { Image, ListGroup } from 'react-bootstrap';
import Moment from 'react-moment';
import Commits from '../../services/github/Commits';
import { ListContainer, ListGroupItem } from './__system.module';

export default function Development(props) {
  const [updates] = Commits();

  return (
    <ListContainer>
      <ListGroup>
        {
          updates &&
            updates.map((update) => (
              <>
                {/* List updates */}
                <ListGroupItem>
                  <div
                    style={{
                      display: 'flex'
                    }}
                  >
                    <Image
                      src={update.committer.avatar_url}
                      width={50}
                      height={50}
                      style={{
                        borderRadius: '0.7rem',
                        marginRight: '1rem'
                      }}
                    />
                    <p className="mr-3 mt-2">{update.commit.committer.name}</p>
                    <a
                      className="mt-2"
                      href={update.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {update.commit.message}
                    </a>
                  </div>
                  <div className="mt-2">
                    <pre className="float-left">{update.sha}</pre>
                    <p className="float-right">
                      <Moment fromNow date={update.commit.committer.date} />
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
