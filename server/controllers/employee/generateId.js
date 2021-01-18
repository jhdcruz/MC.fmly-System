/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// * Generate random ID based on given permission
function generateId(permission) {
  const genId = Math.floor(Math.random() * 90000) + 10000;
  switch (permission) {
    case 'admin':
      return `ADM${genId}`;
    case 'sysadmin':
      return `SYS${genId}`;
    case 'inventory':
      return `INV${genId}`;
    case 'cashier':
      return `CAS${genId}`;
  }
}

module.exports = generateId;
