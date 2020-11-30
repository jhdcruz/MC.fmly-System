/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { useState } from 'react';
import UserHeader from '../components/tables/UserHeader';
import UserService from '../services/UserService';
import UserRow from '../components/tables/UserRow';
import { AddUser, DeleteUser, EditUser } from './modals/UserModal';
import Controls from '../components/Controls';
// Commons
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
          save={() => showAddModal(false)}
          close={() => showAddModal(false)}
        />
        <EditUser
          show={editModal}
          onHide={() => showEditModal(false)}
          save={() => showEditModal(false)}
          close={() => showEditModal(false)}
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

  return (
    <div className="m-0 overflow-auto">
      <Modals />
      <Controls modal={() => showAddModal(true)} />
      {/* Users Table */}
      {users && true ? (
        <UserHeader
          data={
            users &&
            users
              .map((user) => (
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
              ))
              .reverse()
          }
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}
