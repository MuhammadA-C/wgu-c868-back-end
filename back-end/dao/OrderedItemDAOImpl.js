const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

module.exports = class OrderedItemDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.orderedItems_table));
  }

  static getByID(id) {
    return db.execute(
      sqlHelper.selectByID(db_tables.orderedItems_table, "ordered_item_id", id)
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

  static update(updateColumnName, updateValue, id) {
    return db.execute(
      sqlHelper.update(
        db_tables.orderedItems_table,
        updateColumnName,
        "ordered_item_id"
      ),
      [updateValue, id]
    );
  }
};
