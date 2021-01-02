/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback, Loader } from '../../components/common/Loader';
import Header from '../../components/Users/table/Header';
import { UsersApi } from '../../api/Users';

const UserRow = lazy(() => import('../../components/Users/table/Row'));
const UserModals = lazy(() => import('../Users/Modals'));

export default function RUsers() {
  const { data } = UsersApi();

  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback={<Loader />}>
        <UserModals
          editModal={editModal}
          deleteModal={deleteModal}
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

  return (
    <>
      <Modals />
      {data && true ? (
        <Header
          data={
            // Reverse & limit result to 10 | prioritize new entries
            data &&
            data
              .slice(Math.max(data.length - 10, 0))
              .reverse()
              .map((user) => (
                <Suspense fallback={<Loader />}>
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
                </Suspense>
              ))
          }
        />
      ) : (
        <Fallback />
      )}
    </>
  );
}
