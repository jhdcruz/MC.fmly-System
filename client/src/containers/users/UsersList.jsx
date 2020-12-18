/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { Loader } from '../../components/common/Loader';
import SearchControls from '../../components/SearchControls';
import Categories from '../../components/sidebar/Categories';
import UserHeader from '../../components/tables/UserHeader';
import UserRow from '../../components/tables/UserRow';
import UserService from '../../services/UserService';
import { AddUser, DeleteUser, EditUser } from './UserModals';

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
  const employeePermissions =
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
  const employeeRoles =
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
      data &&
      employeePermissions.map((employee) => (
        <Tab.Pane key={employee.permission} eventKey={employee.permission}>
          <UserHeader
            data={
              data &&
              data
                .filter((pane) => pane.permission === employee.permission)
                .map((employeeByPermission) => Users(employeeByPermission))
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
      employeeRoles.map((employee) => (
        <Tab.Pane key={employee.role} eventKey={employee.role}>
          <UserHeader
            _id={data && data._id}
            data={data
              .filter((pane) => pane.role === employee.role)
              .map((employeeByRole) => Users(employeeByRole))}
          />
        </Tab.Pane>
      ))
    );
  };

  const EmployeeList = () => {
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
                data={data && data.map((employee) => Users(employee)).reverse()}
              />
            </Tab.Pane>
            <PermissionFilter />
            <RoleFilter />
          </>
        ) : (
          <Loader />
        )}
      </>
    );
  };

  return (
    <Categories
      main="Permissions"
      mainTabs={
        data &&
        employeePermissions.map((employee) => (
          <Nav.Item key={employee.permission}>
            <Nav.Link eventKey={employee.permission}>
              {employee.permission}
            </Nav.Link>
          </Nav.Item>
        ))
      }
      secondary="Roles"
      secondaryTabs={
        data &&
        employeeRoles.map((employee) => (
          <Nav.Item key={employee.role}>
            <Nav.Link eventKey={employee.role}>{employee.role}</Nav.Link>
          </Nav.Item>
        ))
      }
      content={<EmployeeList />}
    />
  );
}
