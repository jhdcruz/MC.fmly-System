/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import SearchControls from '../../components/SearchControls';
import Categories from '../../components/sidebar/Categories';
import UserHeader from '../../components/tables/UserHeader';
import UserRow from '../../components/tables/UserRow';
import UserService from '../../services/UserService';
import { AddUser, DeleteUser, EditUser } from './UserModals';
import Loader from '../../components/common/Loader';

export default function UsersList(props) {
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

  const Users = (user) => {
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
                  {/* TODO: Prevent header re-render */}
                  <UserHeader
                    data={
                      data &&
                      data
                        .filter((pane) => pane.permission === user.permission)
                        .map((userByPermission) => Users(userByPermission))
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
        {data && true ? (
          <>
            {data &&
              userRoles.map((user) => (
                <Tab.Pane key={user.role} eventKey={user.role}>
                  <UserHeader
                    _id={data && data._id}
                    data={data
                      .filter((pane) => pane.role === user.role)
                      .map((userByRole) => Users(userByRole))}
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
          cardView={props.view}
          modal={() => showAddModal(true)}
        />

        <Tab.Pane eventKey="default">
          <UserHeader
            data={data && data.map((user) => Users(user)).reverse()}
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
      content={<EmployeeList />}
    />
  );
}
