/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Fallback } from '../../components/common/Loaders';
import SearchControls from '../../components/common/SearchControls';
import Categories from '../../components/Sidebar/Categories';
import Notification from '../../components/common/Notification';
import ViewAll from './ViewAll';
import ViewPermission from './ViewPermission';
import ViewRole from './ViewRole';
import { UsersApi } from '../../api/Users';
import { userPermissions, userRoles } from './Filters';

const UserModals = lazy(() => import('./Modals'));

export default function View() {
  const { data } = UsersApi();
  const [view, setView] = useState('list');

  // * Modal State Handlers
  const [addModal, showAddModal] = useState(false);
  const [editModal, showEditModal] = useState(false);
  const [deleteModal, showDeleteModal] = useState(false);
  const [bDeleteModal, showBDeleteModal] = useState(false);

  // * Modals
  const Modals = () => {
    return (
      <Suspense fallback="">
        <UserModals
          addModal={addModal}
          editModal={editModal}
          deleteModal={deleteModal}
          bDeleteModal={bDeleteModal}
          addHide={() => showAddModal(false)}
          addSubmit={() => showAddModal(false)}
          editHide={() => showEditModal(false)}
          editSubmit={() => showEditModal(false)}
          deleteHide={() => showDeleteModal(false)}
          deleteSubmit={() => showDeleteModal(false)}
          bDeleteSubmit={() => showBDeleteModal(false)}
          bDeleteHide={() => showBDeleteModal(false)}
        />
      </Suspense>
    );
  };

  const UsersView = () => {
    return (
      <>
        <Modals />
        <SearchControls
          listView={() => setView('list')}
          cardView={() => setView('card')}
          addModal={() => showAddModal(true)}
          bulkDelete={() => showBDeleteModal(true)}
        />

        {data && true ? (
          <>
            {/* Display table based on clicked user permissions/roles */}
            <ViewAll
              data={data}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
            />
            <ViewPermission
              data={data}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
            />
            <ViewRole
              data={data}
              view={view}
              edit={() => showEditModal(true)}
              del={() => showDeleteModal(true)}
            />
          </>
        ) : (
          <Fallback />
        )}
      </>
    );
  };

  return (
    <>
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
        content={<UsersView />}
      />
      <Notification
        delay={10000}
        title="Guide"
        message={
          <p>
            Scroll horizontally using <kbd>Shift</kbd> + <kbd>Scroll</kbd>,
            middle-mouse button and hover to a direction.
          </p>
        }
      />
    </>
  );
}
