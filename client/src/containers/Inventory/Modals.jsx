/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import PForm from '../../components/Products/PForm';
import CustomModal from '../../components/common/CustomModal';

export default function Modals(props) {
  return (
    <>
      <PForm
        header="Add product"
        show={props.addModal}
        onHide={props.addHide}
        submit={props.addSubmit}
        cancel={props.addCancel}
      />
      <PForm
        header="Edit product"
        show={props.editModal}
        onHide={props.editHide}
        submit={props.editSubmit}
        cancel={props.editCancel}
      />
      <CustomModal
        className="text-center"
        size="sm"
        header="Remove product"
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
