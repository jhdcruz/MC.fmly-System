/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import Moment from 'react-moment';
import { TableData, TableRow, Tag } from './__tables.module';
import EntryActions from '../common/EntryActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

/*********************************
 * * Supplier Table Row
 *********************************/

export default function SupplierRow(supplier) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="supplier" key={supplier._id} tabIndex={0}>
        <TableData className="name">
          <EntryActions edit={supplier.edit} delete={supplier.delete} />
          <Tag variant="primary">{supplier.name}</Tag>
        </TableData>
        <TableData className="description">{supplier.description}</TableData>
        <TableData className="type">{supplier.type}</TableData>
        <TableData className="contact">
          <Tag variant="dark">{supplier.contact}</Tag>
        </TableData>
        <TableData className="website">
          <a href={supplier.website} target="_blank" rel="noreferrer">
            <Tag variant="info">
              <FontAwesomeIcon icon={faGlobe} />
            </Tag>
          </a>
        </TableData>
        <TableData className="updatedAt">
          {/* Parse date to human-friendly format */}
          <Moment fromNow date={supplier.updatedAt} />
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Moment
            format="D MMM YYYY | HH:mm"
            date={supplier.createdAt}
            withTitle
          />
        </TableData>
      </TableRow>
    </>
  );
}
