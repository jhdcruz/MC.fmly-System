/*
 *     MC Inventory Management System
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

import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Dashboard() {
  return (
    <Jumbotron fluid style={{ color: 'whitesmoke' }}>
      <h1>
        Asan na ung features na pinapahanap ko?
      </h1>
      <h6>one-man team po ako, di po aabot kung iintayin ko matapos ung mga papers/research</h6>
      <h6>di nmn ako nagmamadali, paalala lang, chill.</h6>
    </Jumbotron>
  );
}
