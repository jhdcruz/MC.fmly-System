/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import View from '../containers/Pos/View';
import Display from '../containers/Pos/Display';
import ErrorBoundary from '../components/common/ErrorBoundary';

export default function Pos() {
  return (
    <ErrorBoundary>
      <View />
      <Display />
    </ErrorBoundary>
  );
}
