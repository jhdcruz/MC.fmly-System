/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import { Fallback } from '../../components/common/Loaders';
import Header from '../../components/Users/table/Header';
import Row from '../../components/Users/table/Row';
import { UsersApi } from '../../api/Users';

const UserModals = lazy(() => import('../Users/Modals'));

export default function RUsers() {
  const { data } = UsersApi();

  // * Modal State Handlers | Until API's done
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback="">
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
            data &&
            data
              // Reverse & limit result to 10 | prioritize new entries
              .slice(Math.max(data.length - 10, 0))
              .map((user) =>
                Row(
                  user,
                  () => showEditModal(true),
                  () => showDeleteModal(true)
                )
              )
              .reverse()
          }
        />
      ) : (
        <Fallback />
      )}
    </>
  );
}
