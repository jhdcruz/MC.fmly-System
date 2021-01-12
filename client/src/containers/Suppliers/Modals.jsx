/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import SForm from '../../components/Suppliers/SForm';
import ConfirmModal from '../../components/common/modals/ConfirmModal';

const Modals = memo((props) => {
  return (
    <>
      <SForm
        header="Add supplier"
        show={props.addModal}
        onHide={props.addHide}
        // TODO: POST entry
        submit={props.addSubmit}
        cancel={props.addHide}
      />
      <SForm
        header="Edit supplier"
        show={props.editModal}
        onHide={props.editHide}
        // TODO: PATCH entry
        submit={props.editSubmit}
        cancel={props.editHide}
      />
      <ConfirmModal
        className="text-center"
        size="sm"
        header="Remove supplier"
        content="Are you sure?"
        show={props.deleteModal}
        onHide={props.deleteHide}
        submit={props.deleteSubmit}
        cancel={props.deleteHide}
      />
      <ConfirmModal
        className="text-center"
        size="sm"
        header="Bulk Delete"
        content="Delete selected item/s?"
        show={props.bDeleteModal}
        onHide={props.bDeleteHide}
        submit={props.bDeleteSubmit}
        cancel={props.bDeleteHide}
      />
    </>
  );
});

export default Modals;
