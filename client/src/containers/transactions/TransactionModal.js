/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import CustomModal from '../../components/common/CustomModal';
import TransactionForm from '../../components/forms/TransactionForm';

// TODO: API Communication

export const EditTransaction = (props) => {
  return (
    <TransactionForm
      header="Edit transaction"
      show={props.show}
      onHide={props.onHide}
      // TODO: PATCH entry
      submit={props.submit}
      cancel={props.cancel}
    />
  );
};

export const AddTransaction = (props) => {
  return (
    <TransactionForm
      header="Add transaction"
      show={props.show}
      onHide={props.onHide}
      // TODO: POST entry
      submit={props.submit}
      cancel={props.cancel}
    />
  );
};

export const DeleteTransaction = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Remove transaction"
      content="Are you sure?"
      show={props.show}
      onHide={props.onHide}
      footer={
        <>
          {/* TODO: DELETE entry */}
          <Button variant="outline-danger" onClick={props.save}>
            Yes
          </Button>
          <Button variant="outline-primary" onClick={props.close}>
            No
          </Button>
        </>
      }
    />
  );
};
