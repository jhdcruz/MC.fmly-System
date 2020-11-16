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

const productsInstance = axios.create({
  baseURL: '/api/products'
});
const suppliersInstance = axios.create({
  baseURL: '/api/suppliers'
});
const usersInstance = axios.create({
  baseURL: '/api/users'
});

// * Products API
const productsRequest = async (method, url, data, headers) =>
  await Promise((resolve, reject) => {
    (() => {
      if (method === 'get') {
        return productsInstance.request({
          url,
          method,
          params: data,
          headers
        });
      }
      return productsInstance.request({
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

// * Suppliers API
const suppliersRequest = async (method, url, data, headers) =>
  await Promise((resolve, reject) => {
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

// * Users API
const usersRequest = async (method, url, data, headers) =>
  await Promise((resolve, reject) => {
    (() => {
      if (method === 'get') {
        return usersInstance.request({
          url,
          method,
          params: data,
          headers
        });
      }
      return usersInstance.request({
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

// ! API exports
export const ProductsRequest = {
  get: (endpoint, data, headers) =>
    productsRequest('get', endpoint, data, headers),
  post: (endpoint, data) => productsRequest('post', endpoint, data),
  put: (endpoint, data) => productsRequest('put', endpoint, data),
  del: (endpoint, data) => productsRequest('delete', endpoint, data)
};
export const SuppliersRequest = {
  get: (endpoint, data, headers) =>
    suppliersRequest('get', endpoint, data, headers),
  post: (endpoint, data) => suppliersRequest('post', endpoint, data),
  put: (endpoint, data) => suppliersRequest('put', endpoint, data),
  del: (endpoint, data) => suppliersRequest('delete', endpoint, data)
};
export const UsersRequest = {
  get: (endpoint, data, headers) =>
    usersRequest('get', endpoint, data, headers),
  post: (endpoint, data) => usersRequest('post', endpoint, data),
  put: (endpoint, data) => usersRequest('put', endpoint, data),
  del: (endpoint, data) => usersRequest('delete', endpoint, data)
};
