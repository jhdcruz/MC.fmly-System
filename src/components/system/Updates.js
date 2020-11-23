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
import { ListGroup } from 'react-bootstrap';
import Moment from 'react-moment';
import Releases from '../../services/github/Releases';
import { ListContainer, ListGroupItem } from './__system.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

export default function Updates(props) {
  const [releases] = Releases();

  return (
    <ListContainer>
      <ListGroup>
        {
          releases &&
            releases.map((release) => (
              <>
                {/* List releases */}
                <ListGroupItem key={release.id}>
                  <div
                    style={{
                      display: 'flex'
                    }}
                  >
                    <a
                      className="mt-2"
                      href={release.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTag}
                        style={{
                          color: '#ec2738',
                          outline: 'none'
                        }}
                      />
                      {release.tag_name}
                    </a>
                  </div>
                  {/* Release description */}
                  <p>{release.body}</p>
                  <div className="mt-2">
                    <pre className="float-left">
                      Released by: {release.author.login}
                    </pre>
                    <p className="float-right">
                      <Moment fromNow date={release.published_at} />
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
