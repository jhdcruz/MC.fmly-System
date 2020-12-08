/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useCallback, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Status from './containers/Status';
// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Brand from './assets/img/logo.svg';
import './App.scss';
// Views
import Admin from './views/Admin';
import Cashier from './views/Cashier';
import SysAdmin from './views/SysAdmin';
import InventoryClerk from './views/InventoryClerk';

/* ===========================

 * Styled Components
 * ============================
 */
const Img = styled(Image)`
  width: 75vh;
  height: auto;
  margin: auto 7vw;
  user-select: none;
  -webkit-user-drag: none;
`;

const LoginContainer = styled(Container)`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden !important;
  z-index: 1;

  #Logo {
    margin: 0 auto 2vh auto;
    width: 10rem;
    display: block;
  }

  // Show only login form in <1025px
  @media only screen and (max-width: 1025px) {
    form {
      padding: 13vh 20vw;
      width: 100%;
      background-color: #222126;
      border: 3px ridge #e6a195;
    }
  }
`;

const LoginForm = styled(Form)`
  width: 500px;
  height: 100vh;
  margin: 0;
  padding: 10vh 10vw;
  color: whitesmoke;
  background-color: #222126;
  border-left: 4px ridge #e6a195;
  box-shadow: rgba(230, 161, 149, 0.8) -1px 0px 8px;
  overflow: hidden !important;
  position: fixed;
  right: 0;

  img {
    margin: 0 auto 2vh auto;
    display: block;
  }
`;

const FormLabel = styled(Form.Label)`
  color: #bebebe;
`;

const InputIcon = styled(InputGroup.Prepend)`
  span {
    background-color: #1e1e1e;
    color: #e6a195;
    border: 2px inset #e6a195;
    border-radius: 0.5rem;
  }
`;

const FormControl = styled(Form.Control)`
  font-size: 18px;
  background-color: transparent;
  color: whitesmoke;
  border: 2px outset #e6a195;
  border-radius: 0.5rem;

  ::placeholder {
    color: #c4c4c4;
    font-size: 18px;
  }

  :active,
  :focus {
    font-size: 18px;
    background-color: #1b1e21;
    color: whitesmoke;
    border-color: #d7b9b4;
    box-shadow: 0 0 7px #d7b9b4;
  }
`;

const LoginControl = styled.div`
  vertical-align: middle;

  a {
    text-decoration: underline !important;
    margin-top: 5px;
  }
`;

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState();

  /*******************************
   * * Authentication Handler
   *******************************/
  const userVerify = useCallback((username, password) => {
    axios
      .post(`https://mc-ims-api.herokuapp.com/auth/login`, username, password)
      .then((res) => {
        if (res.data === 'Credentials Mismatched!') {
          window.alert('Invalid username or password...');
        } else {
          setAuth(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
        window.alert(`${err}\n Please contact the System Administrator!`);
      });
  }, []);

  // * Forgot Credentials/Password Alert
  const forgotCreds = (e) => {
    e.preventDefault();
    window.alert('Please inform the System Admin.');
  };

  /*******************************
   * * Role-based Views
   *******************************/
  if (auth === 'admin') {
    return <Admin />;
  } else if (auth === 'sysadmin') {
    return <SysAdmin />;
  } else if (auth === 'inventory') {
    return <InventoryClerk />;
  } else if (auth === 'cashier') {
    return <Cashier />;
  }

  /*******************************
   * * Login Form
   *******************************/
  return (
    <LoginContainer fluid>
      <Img src={Brand} alt="Company Logo" rounded width={500} height={500} />

      {/* Login Form */}
      <LoginForm
        autoComplete="off"
        autoSave="off"
        onSubmit={handleSubmit(userVerify)}
      >
        <Image
          id="Logo"
          src={Brand}
          width={250}
          alt="Rebranded MC.fmly Logo"
          rounded
        />

        {/* Login Fields */}
        <Form.Group>
          <FormLabel htmlFor="username">Username:</FormLabel>
          <InputGroup>
            <InputIcon>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
            </InputIcon>
            <FormControl
              type="username"
              name="username"
              placeholder="Username"
              autoComplete="new-text"
              autoSave="off"
              ref={register}
              autoFocus={true}
              tabIndex={1}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <InputGroup>
            <InputIcon>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faKey} />
              </InputGroup.Text>
            </InputIcon>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-text"
              autoSave="off"
              ref={register}
              tabIndex={2}
              required
            />
          </InputGroup>
        </Form.Group>

        {/* Login Buttons */}
        <LoginControl>
          <a
            style={{ color: '#e6a195' }}
            href="#"
            className="primary float-left"
            onClick={forgotCreds}
            tabIndex={4}
          >
            Forgot credentials
          </a>
          <Button
            variant="outline-primary"
            className="float-right"
            type="submit"
            tabIndex={3}
          >
            Login
          </Button>
        </LoginControl>

        {/* Server Status Icon */}
        <Status placement="left" />
      </LoginForm>
    </LoginContainer>
  );
}
