/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import ProductCatalog from '../containers/products/ProductCatalog';
import PosDisplay from '../components/PosDisplay';

export default function PointOfSale() {
  return (
    <>
      <ProductCatalog />
      <PosDisplay />
    </>
  );
}
