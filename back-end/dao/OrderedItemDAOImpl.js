const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

const orderedItemID_col = "ordered_item_id";

module.exports = class OrderedItemDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.orderedItems_table));
  }

  static getByID(id) {
    return db.execute(
      sqlHelper.selectByID(db_tables.orderedItems_table, orderedItemID_col, id)
    );
  }

  static create(order_id, menu_item_id, price, quantity) {
    return db.execute(sqlHelper.insertOrderedItem(), [
      order_id,
      menu_item_id,
      price,
      quantity,
    ]);
  }

  // Note: Only allowed to change the price or quantity
  static update(updateColumnName, updateValue, id) {
    return db.execute(
      sqlHelper.update(
        db_tables.orderedItems_table,
        updateColumnName,
        orderedItemID_col
      ),
      [updateValue, id]
    );
  }

  static delete(id) {
    return db.execute(
      sqlHelper.deleteByID(db_tables.orderedItems_table, orderedItemID_col, id)
    );
  }
};
