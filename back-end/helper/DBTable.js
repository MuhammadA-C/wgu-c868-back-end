/* Class containing references to the database table names */
module.exports = class DBTable {
  static orderedItems_table = "OrderedItems";
  static menuItems_table = "MenuItems";
  static orderStatus_table = "OrderStatus";

  static get orderedItems_table() {
    return orderedItems_table;
  }

  static get menuItems_table() {
    return menuItems_table;
  }

  static get orderStatus_table() {
    return orderStatus_table;
  }
};
