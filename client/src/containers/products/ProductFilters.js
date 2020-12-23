/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// * Removes duplicate properties | category
function productCategories(data) {
  return (
    data
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.category === items.category)
      )
      // Sort items
      .reverse()
  );
}

// * Removes duplicate properties | type
function productTypes(data) {
  return (
    data
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.type === items.type)
      )
      // Sort items
      .reverse()
  );
}

module.exports = {
  productCategories,
  productTypes
};
