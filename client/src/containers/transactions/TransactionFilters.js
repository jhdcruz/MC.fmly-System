/*
 *     MC.fmly Inventory Management System
 *     Copyright (C) 2020  Joshua Hero Dela Cruz
 *     Licensed under GNU General Public License 3.0 or later
 */

// * Removes duplicate properties | status
function transactionStatus(data) {
  return (
    data
      .filter(
        (items, index, self) =>
          index === self.findIndex((deduped) => deduped.status === items.status)
      )
      // Sort items
      .reverse()
  );
}

// * Removes duplicate properties | payment
function transactionPayment(data) {
  return (
    data
      .filter(
        (items, index, self) =>
          index ===
          self.findIndex((deduped) => deduped.payment === items.payment)
      )
      // Sort items
      .reverse()
  );
}

module.exports = {
  transactionStatus,
  transactionPayment
};
