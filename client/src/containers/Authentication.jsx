/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import { lazy, Suspense, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
  import { Fallback } from 'components/common/Loaders';
import ApiStatus from './ApiStatus';
import LForm from '../components/Login/LForm';
import { AuthApi } from '../api/Auth';

// * Lazy import views
const Admin = lazy(() => import('../views/Admin'));
const Cashier = lazy(() => import('../views/Cashier'));
const SysAdmin = lazy(() => import('../views/SysAdmin'));
const InventoryClerk = lazy(() => import('../views/InventoryClerk'));

export default function Authentication() {
  const { register, handleSubmit } = useForm();
  const [auth, setAuth] = useState();

  // * Authentication Handler
  const userVerify = useCallback((username, password) => {
    AuthApi({
      username,
      password
    })
      .then((res) => {
        setAuth(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert('Invalid username or password.');
        } else {
          alert('Server is currently down.');
        }
      });
  }, []);

  // * Forgot Credentials/Password Alert
  const forgotCreds = (e) => {
    e.preventDefault();
    alert('Please inform the System Admin.');
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
      <LForm
        username={register}
        password={register}
        submit={handleSubmit(userVerify)}
        forgotten={forgotCreds}
      />
      <ApiStatus placement="left" />
    </>
  );
}
