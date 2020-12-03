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

import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Control, LargeControl } from './Control';
import { faShoppingBasket, faTrash } from '@fortawesome/free-solid-svg-icons';

const PosContainer = styled.div`
  height: 100vh;
  width: 46vw;
  min-width: 40vw;
  margin: 0 auto;
`;

const PosCart = styled(Col)`
  height: 65vh;
  width: 50vw;
  min-width: 40vw;
  padding: 0;
  background-color: rgba(33, 34, 38, 0.3);
  margin: 3rem 1rem 0.3rem 1.3rem;
  border: 2px ridge #e6a195;
  border-radius: 0.3rem;
`;

const PosControls = styled(Col)`
  margin: 0.5rem 0;
  border-radius: 0.3rem;
  height: max-content;

  // * Select all child elements
  * {
    font-size: 1.5vw;
    color: #d2d2d2;
  }

  // Input Icons
  .input-group-prepend span,
  .input-group-append span {
    margin: 0;
    padding: 0 15px;
    font-size: 1.3vw;
    background-color: #141414;
    color: #999999;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 1px 2px 5px #1b1b1b;
  }

  // Input
  .form-control {
    margin: 0;
    padding: 5px 15px;
    font-size: 1.3vw;
    background-color: #222126;
    color: whitesmoke;
    border: none;
    border-radius: 0.4rem;
    vertical-align: middle;
    box-shadow: 1px 2px 5px #1b1b1b;

    ::placeholder {
      color: #c4c4c4;
      font-size: 1.2vw;
    }

    :active,
    :focus {
      background-color: #1b1e21;
      color: whitesmoke;
      border: none;
      box-shadow: 0 0 7px #d7b9b4;
    }
  }

  // Number inputs
  input[type='number']::-webkit-inner-spin-button {
    // Hide input inner control on [type=number]
    -webkit-appearance: none;
  }
`;

export default function PosDisplay(props) {
  return (
    <PosContainer>
      <Row>
        <PosCart>{props.cart}</PosCart>
      </Row>
      <PosControls>
        <Row>
          <Col>
            <h4>Items: {props.items || 0}</h4>
          </Col>
          <Col>
            {/* VAT Input */}
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>VAT:</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder="Default: 12" type="number" />
              <InputGroup.Append>
                <InputGroup.Text>%</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            {/* Total * VAT % */}
            <h4>Total Amount: ₱{props.total || '0.00'}</h4>
          </Col>
        </Row>
        <Row style={{ alignItems: 'center' }}>
          {/* POS Buttons */}
          <LargeControl
            icon={faShoppingBasket}
            content="Checkout"
            action={props.checkout}
          />
          <Control icon={faTrash} action={props.clear} />
        </Row>
      </PosControls>
    </PosContainer>
  );
}
