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
import EmployeeHeader from '../../components/tables/EmployeeHeader';
import EmployeeRow from '../../components/tables/EmployeeRow';
import { DeleteUser, EditUser } from '../modals/UserModal';
import UserService from '../../services/UserService';
import Loader from '../../components/common/Loader';

export default function RecentEmployees() {
  const [users] = UserService();
  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <>
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
    <>
      <Modals />
      <EmployeeHeader
        _id={users && users._id}
        data={
          users && users.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            users &&
            users
              .slice(Math.max(users.length - 10, 0))
              .reverse()
              .map((user) => (
                <EmployeeRow
                  delete={() => showDeleteModal(true)}
                  edit={() => showEditModal(true)}
                  _id={user._id}
                  username={user.username}
                  name={user.name}
                  role={user.role}
                  permission={user.permission}
                  updatedAt={user.updatedAt}
                  createdAt={user.createdAt}
                />
              ))
          ) : (
            <Loader />
          )
        }
      />
    </>
  );
}
