/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import View from '../containers/Employees/View';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Employees() {
  return (
    <ErrorBoundary>
      <View />
    </ErrorBoundary>
  );
}
