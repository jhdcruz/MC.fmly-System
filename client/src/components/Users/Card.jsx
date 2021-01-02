/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';
import { ExpandedCard } from '../common/ItemCard';
import Tag from '../common/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

const Moment = lazy(() => import('react-moment'));

export const UserCard = (user, edit) => {
  return (
    <ExpandedCard
      action={edit}
      key={user._id}
      title={user.name}
      variant="dark"
      content={
        <>
          <Tag variant="primary" content={user.username} />{' '}
          <Tag variant="dark" content={user.role} />
        </>
      }
      footer={(() => {
        if (user.permission === 'admin') {
          return <Tag variant="warning" content={user.permission} />;
        } else if (user.permission === 'sysadmin') {
          return <Tag variant="danger" content={user.permission} />;
        } else if (user.permission === 'inventory') {
          return <Tag variant="success" content={user.permission} />;
        } else {
          return <Tag variant="info" content={user.permission} />;
        }
      })()}
      date={
        <>
          <FontAwesomeIcon icon={faCalendarAlt} />{' '}
          <Suspense fallback="—">
            <Moment format="D MMM YYYY" date={user.createdAt} fromNow />
          </Suspense>
          {' | '}
          <FontAwesomeIcon icon={faHistory} />{' '}
          <Suspense fallback="—">
            <Moment fromNow date={user.updatedAt} />
          </Suspense>
        </>
      }
    />
  );
};
