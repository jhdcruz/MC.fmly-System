/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy } from 'react';
import { ExpandedCard } from '../common/ItemCard';
import Tag from '../common/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

const FormatDate = lazy(() => import('../../utils/formatDate'));

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
          <FormatDate
            format="D MMM YYYY"
            date={user.createdAt}
            fromNow={true}
          />
          {' | '}
          <FontAwesomeIcon icon={faHistory} />{' '}
          <FormatDate fromNow={true} date={user.updatedAt} />
        </>
      }
    />
  );
};
