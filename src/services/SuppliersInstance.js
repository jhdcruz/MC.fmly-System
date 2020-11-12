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

import axios from 'axios';

const suppliersInstance = axios.create({
  baseURL: '/api/suppliers'
});

const request = (method, url, data, headers) =>
  new Promise((resolve, reject) => {
    (() => {
      if (method === 'get') {
        return suppliersInstance.request({
          url,
          method,
          params: data,
          headers
        });
      }
      return suppliersInstance.request({
        url,
        method,
        data,
        headers: {}
      });
    })()
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        const { data: error } = err.response || {};
        reject(error);
      });
  });

export const SuppliersRequest = {
  get: (endpoint, data, headers) => request('get', endpoint, data, headers),
  post: (endpoint, data) => request('post', endpoint, data),
  put: (endpoint, data) => request('put', endpoint, data),
  del: (endpoint, data) => request('delete', endpoint, data)
};
