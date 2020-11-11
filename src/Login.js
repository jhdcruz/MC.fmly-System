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
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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
        console.log(res.data);
        return <Redirect to="/dashboard" />;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Form autoComplete="off" autoSave="off" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          type="username"
          name="username"
          placeholder="Enter email"
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="new-password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}
