/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import CustomModal from '../../components/common/CustomModal';
import TransactionForm from '../../components/Transactions/TransactionForm';

export default function Modals(props) {
  return (
    <>
      <TransactionForm
        header="Add transaction"
        show={props.addModal}
        onHide={props.addHide}
        // TODO: POST entry
        submit={props.addSubmit}
        cancel={props.addCancel}
      />
      <TransactionForm
        header="Edit transaction"
        show={props.editModal}
        onHide={props.editHide}
        // TODO: PATCH entry
        submit={props.editSubmit}
        cancel={props.editCancel}
      />
      <CustomModal
        className="text-center"
        size="sm"
        header="Remove transaction"
        content="Are you sure?"
        show={props.deleteModal}
        onHide={props.deleteHide}
        footer={
          <>
            {/* TODO: DELETE entry */}
            <Button variant="outline-danger" onClick={props.deleteSubmit}>
              Yes
            </Button>
            <Button variant="outline-primary" onClick={props.deleteCancel}>
              No
            </Button>
          </>
        }
      />
      <CustomModal
        className="text-center"
        size="sm"
        header="Invoice"
        content="No invoice record for this transaction."
        show={props.invoiceModal}
        onHide={props.invoiceHide}
        footer={
          <>
            <Button variant="outline-primary" onClick={props.invoiceClose}>
              Close
            </Button>
          </>
        }
      />
    </>
  );
}
