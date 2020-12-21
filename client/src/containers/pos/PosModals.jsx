/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import CustomModal from '../../components/common/CustomModal';
import Button from 'react-bootstrap/Button';
import { LargeControl } from '../../components/common/Controls';
import { faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';

export default function PosModals(props) {
  return (
    <>
      <CustomModal
        className="text-center"
        size="sm"
        header="Checkout"
        content={
          <>
            <p>Payment Methods:</p>
            <LargeControl icon={faWallet} content="Cash" action={props.checkoutCash} />
            <LargeControl
              icon={faCreditCard}
              content="Card"
              action={props.checkoutCard}
            />
          </>
        }
        show={props.checkoutModal}
        onHide={props.checkoutHide}
        footer={
          <>
            <Button variant="outline-danger" onClick={props.checkoutCancel}>
              Close
            </Button>
          </>
        }
      />
      <CustomModal
        className="text-center"
        size="sm"
        header="Checkout"
        content="Print Receipt?"
        show={props.receiptModal}
        onHide={props.receiptHide}
        footer={
          <>
            <Button variant="outline-primary" onClick={props.receiptPrint}>
              Print
            </Button>
            <Button variant="outline-danger" onClick={props.receiptCancel}>
              Close
            </Button>
          </>
        }
      />
      <CustomModal
        className="text-center"
        size="sm"
        header="Clear Items"
        content="Clear listed items?"
        show={props.clearModal}
        onHide={props.clearHide}
        footer={
          <>
            <Button variant="outline-danger" onClick={props.clearSubmit}>
              Clear
            </Button>
            <Button variant="outline-primary" onClick={props.clearCancel}>
              Cancel
            </Button>
          </>
        }
      />
    </>
  );
}
