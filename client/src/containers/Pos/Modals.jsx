/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { LargeControl } from '../../components/common/Controls';
import { faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';
import ConfirmModal from '../../components/common/modals/ConfirmModal';
import AlertModal from '../../components/common/modals/AlertModal';

export default function Modals(props) {
  return (
    <>
      <AlertModal
        className="text-center"
        size="sm"
        show={props.checkoutModal}
        onHide={props.checkoutHide}
        close={props.checkoutHide}
        buttonVariant="outline-danger"
        header="Checkout"
        content={
          <>
            <p>Payment Methods:</p>
            <LargeControl
              icon={faWallet}
              content="Cash"
              action={props.checkoutCash}
            />
            <LargeControl
              icon={faCreditCard}
              content="Card"
              action={props.checkoutCard}
            />
          </>
        }
      />

      <ConfirmModal
        className="text-center"
        size="sm"
        header="Checkout"
        content="Print Receipt?"
        show={props.receiptModal}
        onHide={props.receiptHide}
        submit={props.receiptPrint}
        submitText="Print"
        cancel={props.receiptHide}
        cancelText="Close"
      />

      <ConfirmModal
        className="text-center"
        size="sm"
        header="Clear Items"
        content="Clear listed items?"
        show={props.clearModal}
        onHide={props.clearHide}
        submit={props.clearSubmit}
        submitText="Clear"
        cancel={props.clearHide}
        cancelText="Cancel"
      />
    </>
  );
}
