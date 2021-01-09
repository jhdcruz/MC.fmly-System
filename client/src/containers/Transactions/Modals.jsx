/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import TForm from '../../components/Transactions/TForm';
import ConfirmModal from '../../components/common/modals/ConfirmModal';
import AlertModal from '../../components/common/modals/AlertModal';

export default function Modals(props) {
  return (
    <>
      <TForm
        header="Add transaction"
        show={props.addModal}
        onHide={props.addHide}
        submit={props.addSubmit}
        cancel={props.addHide}
      />
      <TForm
        header="Edit transaction"
        show={props.editModal}
        onHide={props.editHide}
        submit={props.editSubmit}
        cancel={props.editHide}
      />
      <ConfirmModal
        className="text-center"
        size="sm"
        header="Remove transaction"
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
      <AlertModal
        className="text-center"
        size="sm"
        header="Invoice"
        content="No invoice record for this transaction."
        show={props.invoiceModal}
        onHide={props.invoiceHide}
        close={props.invoiceHide}
      />
    </>
  );
}
