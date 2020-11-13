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

import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Brand from './assets/img/profile.png';
import './App.scss';
import App from './App';

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
`;

const LoginForm = styled(Form)`
  color: whitesmoke;
  background-color: #1e1e1e;
  box-shadow: -7px 0 7px #232323;
  margin: 0;
  height: 100vh;
  width: 500px;
  padding: 30vh 8rem;
  position: fixed;
  right: 0;
  overflow: hidden;
`;

const FormControl = styled(Form.Control)`
  font-size: 1.2vw;
  margin-right: 1rem;
  background-color: transparent;
  color: whitesmoke;

  ::placeholder {
    color: #c4c4c4;
    font-size: 1.2vw;
  }

  :active,
  :focus {
    font-size: 1.2vw;
    background-color: #1b1e21;
    color: whitesmoke;
    border-color: #d7b9b4;
    box-shadow: 0 0 7px #d7b9b4;
  }
`;

const Img = styled(Image)`
  width: 350px;
  height: 300px;
  margin: 25vh 10rem;
  user-select: none;
  -webkit-user-drag: none;
`;

export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .create({ baseURL: '/api' })
      .put(`/login`, {
        username,
        password
      })
      .then((res) => {
        console.log(res);
        if (res.data === 'Credentials Mismatched!') {
          window.alert('Invalid username or password...');
        } else {
          setAuth(true);
        }
      })
      .catch((err) => {
        console.error(err);
        window.alert(err);
        window.alert('Contact the System Administrator!');
      });
  };

  if (!auth) {
    return (
      <LoginContainer fluid>
        <Img src={Brand} alt="Company Logo" rounded />
        <LoginForm autoComplete="off" autoSave="off" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="username">Username:</Form.Label>
            <FormControl
              type="username"
              name="username"
              placeholder="Username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUser(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="outline-primary float-right" type="submit">
            Login
          </Button>
        </LoginForm>
      </LoginContainer>
    );
  }

  return <App />;
}
