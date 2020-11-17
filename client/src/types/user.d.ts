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

declare module 'userType' {
  /*
   * User Interface
   * * @constructor
   * @param {string} username - Username
   * @param {string} name - User Full Name
   * @param {string} role - User Role (Human-friendly Authority)
   * @param {string} permission - User Permission (Access Authority)
   * @param {date} date - Date Joined/Created
   * */
  type UserTypes = {
    // ? = Optional
    _id?: string;
    username: string;
    password: unknown;
    name?: string;
    role?: string;
    permission?: string;
    date?: Date;
  };

  export interface UserProps {
    product: UserTypes;
  }
}

module.exports = {
  UserTypes,
  UserProps
};
