/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import SuppliersList from '../containers/suppliers/SuppliersList';
import SuppliersCard from '../containers/suppliers/SuppliersCard';

export default function Suppliers() {
  const [view, setView] = useState('card');

  return view === 'list' ? (
    <SuppliersList view={() => setView('card')} />
  ) : (
    <SuppliersCard view={() => setView('list')} />
  );
}
