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
import styled from 'styled-components';
import Moment from 'react-moment';
import DevService from '../../services/DevService';

const UpdateContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #e6a195;
  padding: 0.5rem 0.5rem;
  width: 94.7vw;
  height: 100vh;
  overflow: auto !important;
  position: absolute;
  left: 0;
`;

const ListGroupItem = styled(ListGroup.Item)`
  color: #e6a195;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #e6a195;
  vertical-align: middle;

  div {
    vertical-align: middle;
  }

  p {
    color: #e2e2e2;
  }

  a {
    font-weight: bold;
    color: #e6a195;
    text-shadow: 0 2px 6px #1e1e1e;

    :hover {
      text-decoration-style: solid;
    }
  }

  pre {
    color: #faa142;
    background-color: rgba(5, 5, 5, 0.7);
    max-width: 40vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default function Commits(props) {
  const [updates] = DevService();

  return (
    <UpdateContainer>
      <ListGroup>
        {props.title}
        {updates &&
          updates
            .map((update) => (
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
            .slice(0, 15)}
      </ListGroup>
    </UpdateContainer>
  );
}
