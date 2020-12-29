/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../../components/sidebar/Categories';
import SearchControls from '../../components/SearchControls';
import { CardDeck } from '../../components/cards/CardOverlay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import { Fallback } from '../../components/common/Loader';
import { userPermissions, userRoles } from './UserFilters';
import Tag from '../../components/common/Tag';
import UserService from '../../services/UserService';
import ResetScroll from '../../components/ResetScroll';

// * Lazy imports
const UserModals = lazy(() => import('./UserModals'));
const Moment = lazy(() => import('react-moment'));

export default function UsersCard(props) {
  const { data } = UserService();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback="">
        <UserModals
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          addCancel={() => showAddModal(false)}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          editCancel={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          deleteCancel={() => showDeleteModal(false)}
        />
      </Suspense>
    );
  };

  const UserCard = (user) => {
    return (
      <CardDeck
        action={() => showEditModal(true)}
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

  // * Filter users by category
  const PermissionFilter = () => {
    return (
      <>
        {data &&
          userPermissions(data).map((user) => (
            <Tab.Pane key={user.permission} eventKey={user.permission}>
              <ResetScroll />
              {data &&
                data
                  .filter((pane) => pane.permission === user.permission)
                  .map((userByPermission) => UserCard(userByPermission))}
            </Tab.Pane>
          ))}
      </>
    );
  };

  // * Filter users by types
  const RoleFilter = () => {
    return (
      <>
        {data &&
          userRoles(data).map((user) => (
            <Tab.Pane key={user.role} eventKey={user.role}>
              <ResetScroll />
              {data
                .filter((pane) => pane.role === user.role)
                .map((userByRole) => UserCard(userByRole))}
            </Tab.Pane>
          ))}
      </>
    );
  };

  const UserCards = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add User"
          listView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              <ResetScroll />
              {data && data.map((user) => UserCard(user)).reverse()}
            </Tab.Pane>
            <PermissionFilter />
            <RoleFilter />
          </>
        ) : (
          <Fallback />
        )}
      </>
    );
  };

  return (
    <Categories
      main="Permissions"
      mainTabs={
        data &&
        userPermissions(data).map((user) => (
          <Nav.Item key={user.permission}>
            <Nav.Link eventKey={user.permission}>{user.permission}</Nav.Link>
          </Nav.Item>
        ))
      }
      secondary="Roles"
      secondaryTabs={
        data &&
        userRoles(data).map((user) => (
          <Nav.Item key={user.role}>
            <Nav.Link eventKey={user.role}>{user.role}</Nav.Link>
          </Nav.Item>
        ))
      }
      content={<UserCards />}
    />
  );
}
