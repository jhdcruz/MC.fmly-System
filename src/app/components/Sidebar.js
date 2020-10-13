/*
 *     MC Inventory Management System
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

import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'react-bulma-components/lib/components/menu';

export default function Sidebar() {
  return (
    <Menu>
      <Menu.List.Item>
        <Link to="/">Dashboard</Link>
      </Menu.List.Item>
      <Menu.List.Item>
        <Link to="/inventory">Inventory</Link>
      </Menu.List.Item>
      <Menu.List.Item>
        <Link to="/reports">Reports</Link>
      </Menu.List.Item>
    </Menu>
  );
}
