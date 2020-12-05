/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Categories from '../components/sidebar/Categories';
import UserHeader from '../components/tables/UserHeader';
import UserRow from '../components/tables/UserRow';
import SearchControls from '../components/SearchControls';
import UserService from '../services/UserService';
import { AddUser, DeleteUser, EditUser } from './modals/UserModal';
import Loader from '../components/common/Loader';

export default function UsersList() {
  const [users] = UserService();

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

  const Employees = (user) => {
    return (
      <UserRow
        edit={() => showEditModal(true)}
        delete={() => showDeleteModal(true)}
        id={user.id}
        username={user.username}
        name={user.name}
        role={user.role}
        permission={user.permission}
        updatedAt={user.updatedAt}
        createdAt={user.createdAt}
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
                  {/* TODO: Prevent header re-render */}
                  <UserHeader
                    data={
                      users &&
                      users
                        .filter((pane) => pane.permission === user.permission)
                        .map((userByPermission) => Employees(userByPermission))
                    }
                  />
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
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
                  <UserHeader
                    _id={users && users._id}
                    data={users
                      .filter((pane) => pane.role === user.role)
                      .map((userByRole) => Employees(userByRole))}
                  />
                </Tab.Pane>
              ))}
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  const EmployeeList = () => {
    return (
      <>
        <Modals />
        <SearchControls
          add="Add User"
          list="List View"
          card="Card View"
          modal={() => showAddModal(true)}
        />

        <Tab.Pane eventKey="default">
          <UserHeader
            data={users && users.map((user) => Employees(user)).reverse()}
          />
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
      content={<EmployeeList />}
    />
  );
}
