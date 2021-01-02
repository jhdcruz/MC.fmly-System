/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// * Removes duplicate properties | category
export function supplierCategories(data) {
  return [...new Set(data)];
}
