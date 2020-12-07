/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../../components/sidebar/Categories';
import SearchControls from '../../components/SearchControls';
import UserService from '../../services/UserService';
import { AddUser, DeleteUser, EditUser } from '../modals/UserModal';
import Loader from '../../components/common/Loader';
import UsersList from './UsersList';
import { CardDeck } from '../../components/cards/CardOverlay';
import Tag from '../../components/common/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';

export default function UsersCard() {
  const [users] = UserService();
  const [view, setView] = useState();

  // * Modal State Handlers | Until API's done
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
        <AddUser
          show={addModal}
          onHide={() => showAddModal(false)}
          submit={() => showAddModal(false)}
          cancel={() => showAddModal(false)}
        />
        <EditUser
          show={editModal}
          onHide={() => showEditModal(false)}
          submit={() => showEditModal(false)}
          cancel={() => showEditModal(false)}
        />
        <DeleteUser
          show={deleteModal}
          onHide={() => showDeleteModal(false)}
          save={() => showDeleteModal(false)}
          close={() => showDeleteModal(false)}
        />
      </>
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
            <Moment format="D MMM YYYY" date={user.createdAt} fromNow />
            {' | '}
            <FontAwesomeIcon icon={faHistory} />{' '}
            <Moment fromNow date={user.updatedAt} />
          </>
        }
      />
    );
  };

  // * Removes duplicate properties | permissions
  const userPermissions =
    users &&
    users
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.permission === items.permission)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | roles
  const userRoles =
    users &&
    users
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.role === items.role)
      )
      // Sort items
      .reverse();

  // * Filter users by category
  const PermissionFilter = () => {
    return (
      <>
        {users && true ? (
          <>
            {users &&
              userPermissions.map((user) => (
                <Tab.Pane key={user.permission} eventKey={user.permission}>
                  {users &&
                    users
                      .filter((pane) => pane.permission === user.permission)
                      .map((userByPermission) => UserCard(userByPermission))}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
        ;
      </>
    );
  };
  // * Filter users by types
  const RoleFilter = () => {
    return (
      <>
        {users && true ? (
          <>
            {users &&
              userRoles.map((user) => (
                <Tab.Pane key={user.role} eventKey={user.role}>
                  {users
                    .filter((pane) => pane.role === user.role)
                    .map((userByRole) => UserCard(userByRole))}
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  const UserCards = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add User"
          listView={() => setView('list')}
          modal={() => showAddModal(true)}
        />

        <Tab.Pane eventKey="default">
          {users && users.map((user) => UserCard(user)).reverse()}
        </Tab.Pane>
        <PermissionFilter />
        <RoleFilter />
      </>
    );
  };

  if (view === 'list') {
    return <UsersList />;
  }
  return (
    <Categories
      main="Permissions"
      mainTabs={
        users &&
        userPermissions.map((user) => (
          <Nav.Item key={user.permission}>
            <Nav.Link eventKey={user.permission}>{user.permission}</Nav.Link>
          </Nav.Item>
        ))
      }
      secondary="Roles"
      secondaryTabs={
        users &&
        userRoles.map((user) => (
          <Nav.Item key={user.role}>
            <Nav.Link eventKey={user.role}>{user.role}</Nav.Link>
          </Nav.Item>
        ))
      }
      content={<UserCards />}
    />
  );
}
