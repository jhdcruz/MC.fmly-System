/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 */

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

/****************************************
 * * Shared Styles between `forms`
 ****************************************/

// * Modal Form
export const ModalForm = styled(Form)`
  color: whitesmoke;

  // Input Icons
  .input-group-prepend span,
  .input-group-append span {
    margin: 0;
    padding: 0 15px;
    font-size: 1.3vw;
    background-color: #141414;
    color: #999999;
    border: 2px inset #d7b9b4;
    border-radius: 0.5rem;
  }

  // File Input
  .form-control-file {
    margin: 0;
    padding: 5px 15px;
    font-size: 1.3vw;
    color: #d2d2d2;
    vertical-align: middle;
    cursor: pointer;
  }

  // Inputs
  .input-box {
    margin: 0;
    padding: 5px 15px;
    font-size: 1.3vw;
    background-color: #222126;
    color: whitesmoke;
    border: 2px ridge #d7b9b4;
    border-radius: 0.4rem;
    vertical-align: middle;

    ::placeholder {
      color: #c4c4c4;
      font-size: 1.2vw;
    }

    :active,
    :focus {
      background-color: #1b1e21;
      color: whitesmoke;
      border: 2px outset #d7b9b4;
      box-shadow: 0 0 7px #d7b9b4;
    }
  }

  textarea {
    // Make textarea's expand visible
    border-bottom-right-radius: 0 !important;
  }

  // Number inputs
  input[type='number']::-webkit-inner-spin-button {
    // Hide input inner control on [type=number]
    -webkit-appearance: none;
  }

  button {
    margin: 0 5px;
  }
`;

// * Required asterisk
export const Required = styled.span`
  color: #ec2738;
`;
