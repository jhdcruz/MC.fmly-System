/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { ListGroupItem } from './modules/SysInfo';
import { Image } from 'react-bootstrap';
import Moment from 'react-moment';

/********************
 * * Commit Info
 ********************/

export default function Commit(commit) {
  return (
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
  );
}
