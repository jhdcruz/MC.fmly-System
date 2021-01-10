/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Users/table/Header';
import Row from '../../components/Users/table/Row';
import { UserCard } from '../../components/Users/Card';
import { userPermissions } from './Filters';

// * Filter users to permissions
export default function ViewPermission({ data, view, edit, del }) {
  return (
    <>
      {userPermissions(data).map((user) => (
        <Tab.Pane key={user.permission} eventKey={user.permission}>
          {view === 'list' ? (
            <Header
              data={data
                .filter((pane) => pane.permission === user.permission)
                .map((employee) => Row(employee, edit, del))}
            />
          ) : (
            UserCard(user, edit)
          )}
        </Tab.Pane>
      ))}
    </>
  );
}
