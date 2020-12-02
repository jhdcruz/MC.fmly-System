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

import Spinner from 'react-bootstrap/Spinner';
import styled from 'styled-components';

/************************
 * * Spinner/Loading
 ************************/

const Loading = styled(Spinner)`
  margin: 10px auto;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 45vh;
  left: 45vw;
  z-index: 99;
`;

export default function Loader() {
  return <Loading variant="primary" animation="border" role="status" />;
}
