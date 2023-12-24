const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

const orderID_col = "order_id";

module.exports = class OrderIDDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.orderStatus_table));
  }

  static getByID(id) {
    return db.execute(
      sqlHelper.selectByID(db_tables.orderStatus_table, orderID_col, id)
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

  /*
      Note: Only allowed to change the order_status or order_completed_date 
  */
  static update(updateColumnName, updateValue, id) {
    return db.execute(
      sqlHelper.updateOrderStatus(
        db_tables.orderStatus_table,
        updateColumnName,
        orderID_col,
        id
      ),
      [updateValue]
    );
  }

  static delete(id) {
    return db.execute(
      sqlHelper.deleteByID(db_tables.orderStatus_table, orderID_col, id)
    );
  }
};
