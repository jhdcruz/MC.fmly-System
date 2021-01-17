/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

import axios from 'axios';
import { tempRoute } from '../utils/apiRoute';

export const ImportApi = async (route, data) => {
  const url = tempRoute();

  return await axios.put(`${url}/import/${route}`, data);
};
