/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Tab from 'react-bootstrap/Tab';
import Header from '../../components/Suppliers/table/Header';
import Row from '../../components/Suppliers/table/Row';
import Poster from '../../components/Suppliers/Poster';

// * View all suppliers
export default function ViewAll({ data, view, edit, del }) {
  return (
    <Tab.Pane eventKey="default">
      {view === 'list' ? (
        <Header data={data.map((supplier) => Row(supplier, edit, del))} />
      ) : (
        data.map((supplier) => Poster(supplier, edit, del))
      )}
    </Tab.Pane>
  );
}
