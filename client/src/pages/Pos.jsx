/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import ProductCatalog from '../containers/products/ProductCatalog';
import PosControls from '../containers/pos/PosControls';

export default function Pos() {
  return (
    <>
      <ProductCatalog />
      <PosControls />
    </>
  );
}
