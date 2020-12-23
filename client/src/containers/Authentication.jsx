/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Status from './Status';
import LoginForm from '../components/LoginForm';
// Views
import Admin from '../views/Admin';
import Cashier from '../views/Cashier';
import SysAdmin from '../views/SysAdmin';
import InventoryClerk from '../views/InventoryClerk';

export default function Authentication() {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState();

  /*******************************
   * * Authentication Handler
   * TODO: Session-based tokens
   *******************************/
  const userVerify = useCallback((username, password) => {
    axios
      .post(`/auth/login`, username, password)
      .then((res) => {
        if (res.data) {
          setAuth(res.data);
        } else {
          window.alert('Invalid username or password...');
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          window.alert(`Invalid username or password!`);
        } else {
          window.alert(`${err}\n Please contact the System Administrator!`);
        }
      });
  }, []);

  // * Forgot Credentials/Password Alert
  const forgotCreds = (e) => {
    e.preventDefault();
    window.alert('Please inform the System Admin.');
  };

  /*******************************************
   * * Role-based Views
   * TODO: Refactor to switch(); if possible
   *******************************************/
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
    <>
      <LoginForm
        username={register}
        password={register}
        submit={handleSubmit(userVerify)}
        forgotten={forgotCreds}
      />
      <Status placement="left" />
    </>
  );
}
