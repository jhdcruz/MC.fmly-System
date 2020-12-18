/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import ProductInventory from '../containers/inventory/ProductInventory';
import ProductsCard from '../containers/inventory/ProductsCard';

export default function Inventory() {
  const [view, setView] = useState('list');

  return view === 'list' ? (
    <ProductInventory view={() => setView('card')} />
  ) : (
    <ProductsCard view={() => setView('list')} />
  );
}
