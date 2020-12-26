/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Status from './Status';
import LoginForm from '../components/forms/LoginForm';
import { Fallback } from 'components/common/Loader';

// Views
const Admin = lazy(() => import('../views/Admin'));
const Cashier = lazy(() => import('../views/Cashier'));
const SysAdmin = lazy(() => import('../views/SysAdmin'));
const InventoryClerk = lazy(() => import('../views/InventoryClerk'));

export default function Authentication() {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState();

  /*******************************
   * * Authentication Handler
   * TODO: Session-based tokens
   *******************************/
  const userVerify = useCallback((username, password) => {
    axios
      .post(`https://mc-ims-api.herokuapp.com/auth/login`, username, password)
      .then((res) => {
        if (res.data) {
          setAuth(res.data);
        } else {
          window.alert('Invalid username or password...');
        }
      })
      .catch(() => {
        window.alert('Invalid username or password.');
      });
  }, []);

  // * Forgot Credentials/Password Alert
  const forgotCreds = (e) => {
    e.preventDefault();
    window.alert('Please inform the System Admin.');
  };

  /*******************************************
   * * Role-based Views
   *******************************************/

  switch (auth) {
    case 'admin':
      return (
        <Suspense fallback={<Fallback />}>
          <Admin />
        </Suspense>
      );
    case 'sysadmin':
      return (
        <Suspense fallback={<Fallback />}>
          <SysAdmin />
        </Suspense>
      );
    case 'inventory':
      return (
        <Suspense fallback={<Fallback />}>
          <InventoryClerk />
        </Suspense>
      );
    case 'cashier':
      return (
        <Suspense fallback={<Fallback />}>
          <Cashier />
        </Suspense>
      );
    default:
      break;
  }

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
