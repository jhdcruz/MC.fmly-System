/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useState } from 'react';
import PosDisplay from '../../components/PosDisplay';
import { Loader } from '../../components/common/Loader';

const PosModals = lazy(() => import('./PosModals'));

export default function PosControls() {
  const [checkout, showCheckout] = useState(false);
  const [receipt, showReceipt] = useState(false);
  const [clear, clearItems] = useState(false);

  const Modals = () => {
    return (
      <Suspense fallback={<Loader />}>
        <PosModals
          checkoutModal={checkout}
          receiptModal={receipt}
          clearModal={clear}
          checkoutCard={() => showCheckout(false)}
          checkoutCash={() => showCheckout(false)}
          checkoutHide={() => showCheckout(false)}
          checkoutCancel={() => showCheckout(false)}
          receiptHide={() => showReceipt(false)}
          receiptPrint={() => showReceipt(false)}
          receiptCancel={() => showReceipt(false)}
          clearHide={() => clearItems(false)}
          clearSubmit={() => clearItems(false)}
          clearCancel={() => clearItems(false)}
        />
      </Suspense>
    );
  };

  return (
    <>
      <Modals />
      <PosDisplay
        checkout={() => showCheckout(true)}
        print={() => showReceipt(true)}
        clear={() => clearItems(true)}
      />
    </>
  );
}
