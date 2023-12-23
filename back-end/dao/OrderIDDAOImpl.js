const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

module.exports = class OrderIDDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.orderStatus_table));
  }

  static getByID(id) {
    return db.execute(
      sqlHelper.selectByID(db_tables.orderStatus_table, "order_id", id)
    );
  }

  static create(order_id, customer_id, order_status, order_placed_date) {
    return db.execute(sqlHelper.insertOrderID(), [
      order_id,
      customer_id,
      order_status,
      order_placed_date,
    ]);
  }

  static update(updateColumnName, updateValue, id) {
    return db.execute(
      sqlHelper.update(
        db_tables.orderStatus_table,
        updateColumnName,
        "order_id"
      ),
      [updateValue, id]
    );
  }
};
