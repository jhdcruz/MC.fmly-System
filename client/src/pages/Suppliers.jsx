/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import SuppliersList from '../containers/suppliers/SuppliersList';
import SuppliersCard from '../containers/suppliers/SuppliersCard';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Suppliers() {
  const [view, setView] = useState('card');

  return (
    <ErrorBoundary>
      {view === 'list' ? (
        <SuppliersList view={() => setView('card')} />
      ) : (
        <SuppliersCard view={() => setView('list')} />
      )}
    </ErrorBoundary>
  );
}
