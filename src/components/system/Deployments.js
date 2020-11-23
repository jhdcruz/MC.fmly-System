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
import { ListContainer, ListGroupItem } from './__system.module';
import Deploys from '../../services/github/Deploys';

export default function Deployments() {
  const [deployments] = Deploys();

  return (
    <ListContainer>
      <ListGroup>
        {
          deployments &&
            deployments.map((deploy) => (
              <>
                {/* List updates */}
                <ListGroupItem key={deploy.id}>
                  <div
                    style={{
                      display: 'flex'
                    }}
                  >
                    <Image
                      src={deploy.creator.avatar_url}
                      width={50}
                      height={50}
                      style={{
                        borderRadius: '0.7rem',
                        marginRight: '1rem'
                      }}
                    />
                    <p className="mt-2 primary">
                      {deploy.description}{' '}
                      <sup>
                        <kbd>{deploy.environment}</kbd>
                      </sup>
                    </p>
                    <span
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        bottom: '1.5rem',
                        color: '#d2d2d2'
                      }}
                    >
                      <Moment fromNow date={deploy.created_at} />
                    </span>
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
