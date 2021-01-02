/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../../components/Sidebar/Categories';
import SearchControls from '../../components/common/SearchControls';
import { Fallback } from '../../components/common/Loader';
import Notification from '../../components/common/Notification';
import { UsersApi } from '../../api/Users';
import { userPermissions, userRoles } from './Filters';
import { UserCard } from '../../components/Users/Card';

// * Lazy imports
const UserModals = lazy(() => import('./Modals'));

export default function CardView(props) {
  const { data } = UsersApi();

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

  // * Filter users by category
  const PermissionFilter = () => {
    return (
      <>
        {data &&
          userPermissions(data).map((user) => (
            <Tab.Pane key={user.permission} eventKey={user.permission}>
              {data &&
                data
                  .filter((pane) => pane.permission === user.permission)
                  .map((userByPermission) =>
                    UserCard(userByPermission, () => showEditModal(true))
                  )}
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
              {data
                .filter((pane) => pane.role === user.role)
                .map((userByRole) =>
                  UserCard(userByRole, () => showEditModal(true))
                )}
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
              {data &&
                data
                  .map((user) => UserCard(user, () => showEditModal(true)))
                  .reverse()}
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
    <>
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
      <Notification
        delay={7000}
        title="Notice"
        time="System Admin"
        message="Card view currently has limited functionality compared to List/Table view."
      />
    </>
  );
}
