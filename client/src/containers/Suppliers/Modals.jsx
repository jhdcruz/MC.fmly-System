/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import CustomModal from '../../components/common/CustomModal';
import SForm from '../../components/Suppliers/SForm';

// TODO: API Communication

export default function Modals(props) {
  return (
    <>
      <SForm
        header="Add supplier"
        show={props.addModal}
        onHide={props.addHide}
        // TODO: POST entry
        submit={props.addSubmit}
        cancel={props.addCancel}
      />
      <SForm
        header="Edit supplier"
        show={props.editModal}
        onHide={props.editHide}
        // TODO: PATCH entry
        submit={props.editSubmit}
        cancel={props.editCancel}
      />
      <CustomModal
        className="text-center"
        size="sm"
        header="Remove supplier"
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
