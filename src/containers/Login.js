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
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Brand from '../assets/img/profile.png';
import '../App.scss';
import Notification from '../components/Notification';

function Invalid(props) {
  return (
    <Notification
      show={props.show}
      title="Login Failed"
      time="Just now"
      message="You entered a wrong password or username!"
      delay={3500}
    />
  );
}

export default function Login() {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/users/login`, {
        username,
        password
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container
      fluid
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        margin: '0',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        overflow: 'hidden !important'
      }}
    >
      <Image
        src={Brand}
        alt="Company Logo"
        style={{
          width: 350,
          height: 300,
          margin: '25vh 10rem'
        }}
        rounded
      />
      <Form
        style={{
          color: 'whitesmoke',
          backgroundColor: '#1e1e1e',
          margin: '0',
          height: '100vh',
          width: '500',
          padding: '30vh 8rem',
          position: 'fixed',
          right: 0
        }}
        autoComplete="off"
        autoSave="off"
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
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
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}
