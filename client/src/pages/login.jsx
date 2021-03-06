/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Authentication from '../containers/Authentication';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Login() {
  return (
    <ErrorBoundary>
      <Authentication />
    </ErrorBoundary>
  );
}
