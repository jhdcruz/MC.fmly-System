/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import ErrorBoundary from '../components/common/ErrorBoundary';
import Authentication from '../containers/Authentication';
import Overview from '../components/Login/Overview';

export default function Login() {
  return (
    <ErrorBoundary>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          heigh: '100%'
        }}
      >
        <Overview />
        <Authentication />
      </div>
    </ErrorBoundary>
  );
}
