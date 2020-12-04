/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
