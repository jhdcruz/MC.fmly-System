/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import ProductCatalog from '../containers/ProductCatalog';
import PosDisplay from '../components/PosDisplay';

export default function PointOfSale() {
  return (
    <>
      <ProductCatalog />
      <PosDisplay />
    </>
  );
}
