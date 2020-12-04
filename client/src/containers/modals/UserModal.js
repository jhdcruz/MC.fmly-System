/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import Button from 'react-bootstrap/Button';
import CustomModal from '../../components/common/CustomModal';
import UserForm from '../../components/forms/UserForm';

// TODO: API Communication

export const EditUser = (props) => {
  return (
    <UserForm
      header="Edit user"
      show={props.show}
      onHide={props.onHide}
      // TODO: PATCH entry
      submit={props.submit}
      cancel={props.cancel}
    />
  );
};

export const AddUser = (props) => {
  return (
    <UserForm
      header="Add user"
      show={props.show}
      onHide={props.onHide}
      // TODO: POST entry
      submit={props.submit}
      cancel={props.cancel}
    />
  );
};

export const DeleteUser = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Remove user"
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
