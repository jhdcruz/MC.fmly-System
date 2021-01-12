/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { memo } from 'react';
import UForm from '../../components/Users/UForm';
import ConfirmModal from '../../components/common/modals/ConfirmModal';

const Modals = memo((props) => {
  return (
    <>
      <UForm
        header="Add user"
        show={props.addModal}
        onHide={props.addHide}
        submit={props.addSubmit}
        cancel={props.addHide}
      />
      <UForm
        header="Edit user"
        show={props.editModal}
        onHide={props.editHide}
        submit={props.editSubmit}
        cancel={props.editHide}
      />
      <ConfirmModal
        className="text-center"
        size="sm"
        header="Remove user"
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
