/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import Button from 'react-bootstrap/Button';
import CustomModal from '../../components/common/CustomModal';

export const NoInvoice = (props) => {
  return (
    <CustomModal
      className="text-center"
      size="sm"
      header="Invoice"
      content="No invoice record for this transaction."
      show={props.show}
      onHide={props.onHide}
      footer={
        <>
          <Button variant="outline-primary" onClick={props.close}>
            Close
          </Button>
        </>
      }
    />
  );
};
