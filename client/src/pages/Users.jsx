/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import UsersList from '../containers/users/UsersList';
import UsersCard from '../containers/users/UsersCard';

export default function Users() {
  const [view, setView] = useState('list');

  return view === 'list' ? (
    <UsersList view={() => setView('card')} />
  ) : (
    <UsersCard view={() => setView('list')} />
  );
}
