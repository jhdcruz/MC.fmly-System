/*
 *     MC.fmly Inventory System
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

import { FC } from 'react';
import styled from 'styled-components';

const Notice = styled.h2`
  margin: 10px 0;
  width: max-content;
  position: absolute;
  top: 40%;
  z-index: 99;
`;

const NotFound: FC = () => {
  return (
    <Notice>
      <strong>You are not authorized to access this.</strong>
      <br />
      Admin? Try restarting the system or approach the System Admin.
    </Notice>
  );
};

export default NotFound;
