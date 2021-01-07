/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';
import ApiRoute from '../utils/apiRoute';

export const AuthApi = async ({ username, password }) => {
  const url = ApiRoute();

  return await axios.post(`${url}/auth/login`, username, password);
};
