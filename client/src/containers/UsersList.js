/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import { useState } from 'react';
import UserHeader from '../components/tables/UserHeader';
import UserService from '../services/UserService';
import UserRow from '../components/tables/UserRow';
import { AddUser, DeleteUser, EditUser } from './modals/UserModal';
import SearchControls from '../components/SearchControls';
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

  return (
    <div className="overflow-auto m-0 pt-5">
      <Modals />
      <SearchControls
        add="Add Product"
        list="List View"
        card="Card View"
        modal={() => showAddModal(true)}
      />
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
