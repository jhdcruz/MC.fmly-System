/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useState } from 'react';
import PosDisplay from '../../components/PosDisplay';
import { Checkout, ClearItems, Receipt } from './PosModals';

export default function PosControls() {
  const [checkout, showCheckout] = useState(false);
  const [receipt, showReceipt] = useState(false);
  const [clear, clearItems] = useState(false);

  const Modals = () => {
    return (
      <>
        <Checkout
          show={checkout}
          onHide={() => showCheckout(false)}
          submit={() => showCheckout(false)}
          cancel={() => showCheckout(false)}
        />
        <Receipt
          show={receipt}
          onHide={() => showReceipt(false)}
          submit={() => showReceipt(false)}
          cancel={() => showReceipt(false)}
        />
        <ClearItems
          show={clear}
          onHide={() => clearItems(false)}
          submit={() => clearItems(false)}
          cancel={() => clearItems(false)}
        />
      </>
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
