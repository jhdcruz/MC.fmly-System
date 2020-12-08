/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import UserHeader from '../../components/tables/UserHeader';
import UserRow from '../../components/tables/UserRow';
import { DeleteUser, EditUser } from '../users/UserModals';
import UserService from '../../services/UserService';
import Loader from '../../components/common/Loader';

export default function RecentUsers() {
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
      <UserHeader
        data={
          users && users.length !== null ? (
            // Reverse & limit result to 10 | prioritize new entries
            users &&
            users
              .slice(Math.max(users.length - 10, 0))
              .reverse()
              .map((user) => (
                <UserRow
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
