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
import UserService from '../../services/UserService';
import { AddUser, DeleteUser, EditUser } from './UserModals';
import { Loader } from '../../components/common/Loader';
import { CardDeck } from '../../components/cards/CardOverlay';
import Tag from '../../components/common/Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faHistory } from '@fortawesome/free-solid-svg-icons';

// * Lazy imports
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

  // * Removes duplicate properties | permissions
  const userPermissions =
    data &&
    data
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.permission === items.permission)
      )
      // Sort items
      .reverse();

  // * Removes duplicate properties | roles
  const userRoles =
    data &&
    data
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
        {data && true ? (
          <>
            {data &&
              userPermissions.map((user) => (
                <Tab.Pane key={user.permission} eventKey={user.permission}>
                  {data &&
                    data
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
        {data && true ? (
          <>
            {data &&
              userRoles.map((user) => (
                <Tab.Pane key={user.role} eventKey={user.role}>
                  {data
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
          listView={props.view}
          modal={() => showAddModal(true)}
        />

        <Tab.Pane eventKey="default">
          {data && data.map((user) => UserCard(user)).reverse()}
        </Tab.Pane>
        <PermissionFilter />
        <RoleFilter />
      </>
    );
  };

  return (
    <Categories
      main="Permissions"
      mainTabs={
        data &&
        userPermissions.map((user) => (
          <Nav.Item key={user.permission}>
            <Nav.Link eventKey={user.permission}>{user.permission}</Nav.Link>
          </Nav.Item>
        ))
      }
      secondary="Roles"
      secondaryTabs={
        data &&
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
