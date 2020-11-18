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
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Brand from './assets/img/profile.png';
import './App.scss';
// Views
import Admin from './views/Admin';
import Cashier from './views/Cashier';
import SysAdmin from './views/SysAdmin';
import Inventory from './views/Inventory';

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
      width: 100%;

      img {
        margin: 5% 32% !important;
      }
    }
  }
`;

const LoginForm = styled(Form)`
  color: whitesmoke;
  background-color: #1e1e1e;
  box-shadow: -7px 0 7px #232323;
  margin: 0;
  height: 100vh;
  width: 500px;
  padding: 15vh 10vw;
  position: fixed;
  right: 0;
  overflow: hidden;

  img {
    margin: 0 20% 2vh 20% !important;
  }
`;

const FormControl = styled(Form.Control)`
  font-size: 18px;
  margin-right: 1rem;
  background-color: transparent;
  color: whitesmoke;

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
  const [auth, setAuth] = useState('');

  // * Auth Handler
  const userVerify = useCallback((username, password) => {
    axios
      .post(`/api/users/login`, username, password)
      .then((res) => {
        console.log(res);
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

  // * Role-based views (based on exposed res.permission)
  if (auth === 'admin') {
    return <Admin />;
  }

  if (auth === 'sysadmin') {
    return <SysAdmin />;
  }

  if (auth === 'inventory') {
    return <Inventory />;
  }

  if (auth === 'cashier') {
    return <Cashier />;
  }

  // * Login Form
  return (
    <LoginContainer fluid>
      <Img src={Brand} alt="Company Logo" rounded width={500} height={500} />
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
        <Form.Group>
          <Form.Label htmlFor="username">Username:</Form.Label>
          <FormControl
            type="username"
            name="username"
            placeholder="Username"
            autoComplete="off"
            ref={register}
            autoFocus={true}
            tabIndex={1}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password:</Form.Label>
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            ref={register}
            tabIndex={2}
            required
          />
        </Form.Group>
        <LoginControl>
          <a
            href="#"
            className="primary float-left"
            onClick={() => forgotCreds}
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
      </LoginForm>
    </LoginContainer>
  );
}
