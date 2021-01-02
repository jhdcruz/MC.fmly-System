/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';

export const AuthApi = async ({ username, password }) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/auth/login`,
    username,
    password
  );
};
