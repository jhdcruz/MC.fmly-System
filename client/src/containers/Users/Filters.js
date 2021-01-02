/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// * Removes duplicate properties | permissions
function userPermissions(data) {
  return (
    data
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.permission === items.permission)
      )
      // Sort items
      .reverse()
  );
}

// * Removes duplicate properties | roles
function userRoles(data) {
  return (
    data
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.role === items.role)
      )
      // Sort items
      .reverse()
  );
}

module.exports = {
  userPermissions,
  userRoles
};
