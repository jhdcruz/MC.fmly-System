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

const WidgetUI = styled.div`
  display: inline-block;
  text-align: center;
  margin: 1.7rem 1.5rem 0 0;
  padding: 1rem 3rem;
  height: max-content;
  width: max-content;
  align-self: center;
  background-color: #1e1e1e;
  box-shadow: 0 3px 6px #232323;
  border-radius: 1.5rem;
`;

const WidgetSubject = styled.p`
  color: #c3c3c3;
  font-size: 1.4vw;
  margin: 1rem 0 0.6rem 0;
  font-weight: bold;
`;

const WidgetAmount = styled.h3`
  color: white;
  font-size: 2.2vw;
  font-weight: bolder;
  display: inline-block;
`;

const WidgetLabel = styled.label`
  font-size: 1.3vw;
  color: #a7a7a7;
  margin: 0 5px;
`;

type WidgetProps = {
  subject: string;
  amount: any; // make all values possible and logic-ready
  label?: string;
};

const Widget: FC<WidgetProps> = ({ subject, amount, label }) => {
  return (
    <>
      <WidgetUI>
        <WidgetSubject>{subject}:</WidgetSubject>
        <WidgetAmount>{amount}</WidgetAmount>
        <WidgetLabel>{label}</WidgetLabel>
      </WidgetUI>
    </>
  );
};

export default Widget;