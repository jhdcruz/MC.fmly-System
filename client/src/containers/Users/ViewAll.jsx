/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Users/table/Header';
import Row from '../../components/Users/table/Row';
import { UserCard } from '../../components/Users/Card';

// * View all users
export default function ViewAll({ data, view, edit, del }) {
  return (
    <Tab.Pane eventKey="default">
      {view === 'list' ? (
        <Header data={data.map((user) => Row(user, edit, del))} />
      ) : (
        data.map((user) => UserCard(user, edit))
      )}
    </Tab.Pane>
  );
}
