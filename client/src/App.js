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

import { useCallback, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Button, Container, Form, Image, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Brand from './assets/img/profile.png';
import './App.scss';
// Views
import Admin from './views/Admin';
import Cashier from './views/Cashier';
import SysAdmin from './views/SysAdmin';
import InventoryClerk from './views/InventoryClerk';
import Status from './components/Status';

/* ===========================
 * Styled Components
 * ============================
 */
const Img = styled(Image)`
  width: 500px;
  height: 500px;
  margin: 13vh 6vw;
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

  // Show only login form in <1025px
  @media only screen and (max-width: 1025px) {
    form {
      padding: 25% 10%;
      width: 100%;
      background-color: rgba(19, 19, 19, 0.8);

      img {
        margin: 5% 32% !important;
        display: none;
      }
    }
  }
`;

const LoginForm = styled(Form)`
  color: whitesmoke;
  background-color: #222126;
  box-shadow: -7px 0 7px #1e1e1e;
  margin: 0;
  height: 100vh;
  width: 500px;
  padding: 10vh 10vw;
  position: fixed;
  right: 0;
  overflow: hidden !important;

  img {
    margin: 0 20% 2vh 20% !important;
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

export default function App() {
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
        window.alert(err);
        window.alert('Please contact the System Administrator!');
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
  }

  if (auth === 'sysadmin') {
    return <SysAdmin />;
  }

  if (auth === 'inventory') {
    return <InventoryClerk />;
  }

  if (auth === 'cashier') {
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
          src={Brand}
          width={150}
          height={150}
          alt="Rebranded Company Logo"
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
