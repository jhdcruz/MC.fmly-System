/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import ListView from '../containers/Users/ListView';
import CardView from '../containers/Users/CardView';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Users() {
  const [view, setView] = useState('list');

  return (
    <ErrorBoundary>
      {view === 'list' ? (
        <ListView view={() => setView('card')} />
      ) : (
        <CardView view={() => setView('list')} />
      )}
    </ErrorBoundary>
  );
}
