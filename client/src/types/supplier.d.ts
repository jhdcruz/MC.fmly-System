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

declare module 'supplierType' {
  /*
   * Suppliers Interface
   * @constructor
   * @param {string} icon - Supplier Icon/Image
   * @param {string} name - Supplier Name/Company
   * @param {string} description - Supplier Bio
   * @param {string} type - Types of supplys the supplier provides
   * @param {string} address - Supplier physical address
   * @param {string} website - Supplier website
   * @param {string} contact - Supplier contact #
   * */
  type SupplierTypes = {
    // ? = Optional
    icon?: string;
    name: string;
    description?: string;
    type: string;
    address?: string;
    website?: string;
    contact?: number;
  };

  export interface SupplierProps {
    supplier: SupplierTypes;
  }
}

module.exports = {
  SupplierTypes,
  SupplierProps
};
