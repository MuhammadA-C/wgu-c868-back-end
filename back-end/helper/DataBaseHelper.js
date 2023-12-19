class DataBaseHelper {
  static dbName = "c868_db";
  static menuItems_Table = "MenuItems";
  static orderStatus_Table = "OrderStatus";
  static orderedItems_Table = "OrderedItems";

  static get dbName() {
    return dbName;
  }

  static get menuItems_Table() {
    return menuItems_Table;
  }

  static get orderStatus_Table() {
    return orderStatus_Table;
  }

  static get orderedItems_Table() {
    return orderedItems_Table;
  }
}

module.exports.DataBaseHelper;
