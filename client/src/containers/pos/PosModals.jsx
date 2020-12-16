/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import CustomModal from '../../components/common/CustomModal';
import Button from 'react-bootstrap/Button';
import { LargeControl } from '../../components/common/Controls';
import { faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';

export const Checkout = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Checkout"
      content={
        <>
          <p>Payment Methods:</p>
          <LargeControl icon={faWallet} content="Cash" action={props.cash} />
          <LargeControl
            icon={faCreditCard}
            content="Card"
            action={props.card}
          />
        </>
      }
      show={props.show}
      onHide={props.onHide}
      footer={
        <>
          <Button variant="outline-danger" onClick={props.cancel}>
            Close
          </Button>
        </>
      }
    />
  );
};

export const Receipt = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Checkout"
      content="Print Receipt?"
      show={props.show}
      onHide={props.onHide}
      footer={
        <>
          <Button variant="outline-primary" onClick={props.submit}>
            Print
          </Button>
          <Button variant="outline-danger" onClick={props.cancel}>
            Close
          </Button>
        </>
      }
    />
  );
};

export const ClearItems = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Clear Items"
      content="Clear listed items?"
      show={props.show}
      onHide={props.onHide}
      footer={
        <>
          <Button variant="outline-danger" onClick={props.submit}>
            Clear
          </Button>
          <Button variant="outline-primary" onClick={props.cancel}>
            Cancel
          </Button>
        </>
      }
    />
  );
};
