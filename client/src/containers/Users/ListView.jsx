/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import UserHeader from '../../components/Users/UserHeader';
import UserRow from '../../components/Users/UserRow';
import SearchControls from '../../components/common/SearchControls';
import Categories from '../../components/Sidebar/Categories';
import { Fallback } from '../../components/common/Loader';
import { userPermissions, userRoles } from './Filters';
import { UsersApi } from '../../api/Users';

const UserModals = lazy(() => import('./Modals'));

export default function ListView(props) {
  const { data } = UsersApi();

  // * Modal State Handlers
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
      data &&
      userPermissions(data).map((user) => (
        <Tab.Pane key={user.permission} eventKey={user.permission}>
          <UserHeader
            data={
              data &&
              data
                .filter((pane) => pane.permission === user.permission)
                .map((userByPermission) =>
                  UserRow(
                    userByPermission,
                    () => showEditModal(true),
                    () => showDeleteModal(true)
                  )
                )
            }
          />
        </Tab.Pane>
      ))
    );
  };

  // * Filter users by types
  const RoleFilter = () => {
    return (
      data &&
      userRoles(data).map((user) => (
        <Tab.Pane key={user.role} eventKey={user.role}>
          <UserHeader
            _id={data && data._id}
            data={data
              .filter((pane) => pane.role === user.role)
              .map((userByRole) =>
                UserRow(
                  userByRole,
                  () => showEditModal(true),
                  () => showDeleteModal(true)
                )
              )}
          />
        </Tab.Pane>
      ))
    );
  };

  const UserList = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add Employee"
          cardView={props.view}
          modal={() => showAddModal(true)}
        />

        {data && true ? (
          <>
            <Tab.Pane eventKey="default">
              <UserHeader
                data={
                  data &&
                  data
                    .map((user) =>
                      UserRow(
                        user,
                        () => showEditModal(true),
                        () => showDeleteModal(true)
                      )
                    )
                    // ? priotize new item/data
                    .reverse()
                }
              />
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
      content={<UserList />}
    />
  );
}
