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
import { ListContainer, ListGroupItem, OutlineButton } from './__system.module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

/*****************************************************
 * * Get releases from project repository (GitHub API)
 *****************************************************/

export default function Updates() {
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
                      display: 'inline-flex'
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
                          color: '#4de670',
                          outline: 'none',
                          marginRight: '0.5rem'
                        }}
                      />
                      <span>
                        {/* Release tag & name*/}
                        <kbd>{release.tag_name}</kbd> | {release.name}
                      </span>
                    </a>
                  </div>
                  {/* Release description */}
                  <p>{release.body}</p>
                  <div className="mt-1">
                    <p className="float-left">
                      <Moment fromNow date={release.published_at} />
                    </p>
                    {/* Redirect to release assets download */}
                    <OutlineButton
                      as="a"
                      href={release.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </OutlineButton>
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
