const db_tables = require("./DBTable");

module.exports = class SQLHelper {
  static selectAll(table) {
    return `SELECT * FROM ${table}`;
  }

  static selectByID(table, id_value) {
    return `SELECT * FROM ${table} WHERE ID = ${id_value}`;
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

  static updateMenuItem() {
    return `UPDATE ${db_tables.menuItems_table} SET name = ?, description = ?, picture = ?, price = ? WHERE menu_item_id = ?`;
  }

  static updateOrderedItem() {
    return `UPDATE ${db_tables.orderedItems_table} SET price = ?, quantity = ? WHERE ordered_item_id = ?`;
  }

  static updateOrderID() {
    return `UPDATE ${db_tables.orderStatus_table} SET order_status = ?, order_completed_date = ? WHERE order_id = ?`;
  }
};
