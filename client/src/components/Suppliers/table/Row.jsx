/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense } from 'react';
import { TableData, TableRow, Tag } from '../../common/modules/Tables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import EntryActions from '../../common/EntryActions';

const FormatDate = lazy(() => import('../../../utils/formatDate'));

/*********************************
 * * Supplier Table Row
 *********************************/

export default function Row(supplier, edit, del) {
  return (
    <>
      {/* Product | Table Row */}
      <TableRow className="supplier" key={supplier._id} tabIndex={0}>
        <TableData className="name">
          <EntryActions edit={edit} delete={del} />
          <Tag variant="warning">{supplier.name}</Tag>
        </TableData>
        <TableData className="description">{supplier.description}</TableData>
        <TableData className="tags">
          {supplier.category.map((tags) => (
            <Tag variant="dark" key={tags}>
              {tags}
            </Tag>
          ))}
        </TableData>
        <TableData className="contact">
          <Tag variant="info">{supplier.contact}</Tag>
        </TableData>
        <TableData className="website">
          <Button href={supplier.website} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGlobe} />
          </Button>
        </TableData>
        <TableData className="updatedAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <FormatDate fromNow={true} date={supplier.updatedAt} />
          </Suspense>
        </TableData>
        <TableData className="createdAt">
          {/* Parse date to human-friendly format */}
          <Suspense fallback="—">
            <FormatDate
              format="D MMM YYYY | HH:mm"
              date={supplier.createdAt}
              withTitle={true}
            />
          </Suspense>
        </TableData>
      </TableRow>
    </>
  );
}
