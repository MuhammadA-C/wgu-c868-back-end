const db_tables = require("./DBTable");

module.exports = class SQLHelper {
  static selectAll(table) {
    return `SELECT * FROM ${table}`;
  }

  static selectByID(table, column_id, id_value) {
    return `SELECT * FROM ${table} WHERE ${column_id} = ${id_value}`;
  }

  static deleteByID(table, id_value) {
    return `DELETE FROM ${table} WHERE ID = ${id_value}`;
  }

  static insertMenuItem() {
    return `INSERT INTO ${db_tables.menuItems_table} (name, description, picture, price) VALUES (?, ?, ?, ?)`;
  }

  static insertOrderedItem() {
    return `INSERT INTO ${db_tables.orderedItems_table} (order_id, menu_item_id, price, quantity) VALUES (?, ?, ?, ?)`;
  }

  static insertOrderID() {
    return `INSERT INTO ${db_tables.orderStatus_table} (order_id, customer_id, order_status, order_placed_date) VALUES (?, ?, ?, ?)`;
  }

  static update(table, update_column_name, id_column_name) {
    return `UPDATE ${table} SET ${update_column_name} = ? WHERE ${id_column_name} = ?`;
  }
};
