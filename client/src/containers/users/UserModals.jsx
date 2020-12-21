/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import UserForm from '../../components/forms/UserForm';
import CustomModal from '../../components/common/CustomModal';

export default function UserModals(props) {
  return (
    <>
      <UserForm
        header="Add user"
        show={props.addModal}
        onHide={props.addHide}
        // TODO: POST entry
        submit={props.addSubmit}
        cancel={props.addCancel}
      />
      <UserForm
        header="Edit user"
        show={props.editModal}
        onHide={props.editHide}
        // TODO: PATCH entry
        submit={props.editSubmit}
        cancel={props.editCancel}
      />
      <CustomModal
        className="text-center"
        size="sm"
        header="Remove user"
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
    </>
  );
}
