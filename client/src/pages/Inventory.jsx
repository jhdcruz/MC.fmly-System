/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import ProductsList from '../containers/products/ProductsList';
import ProductsCard from '../containers/products/ProductsCard';

export default function Inventory() {
  const [view, setView] = useState('list');

  return view === 'list' ? (
    <ProductsList view={() => setView('card')} />
  ) : (
    <ProductsCard view={() => setView('list')} />
  );
}
