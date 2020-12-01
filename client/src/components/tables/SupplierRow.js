/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero H. Dela Cruz
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
