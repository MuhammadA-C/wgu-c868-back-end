const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

module.exports = class OrderedItemDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.orderedItems_table));
  }

  static getByID(id) {
    return db.execute(
      sqlHelper.selectByID(db_tables.menuItems_table, "ordered_item_id", id)
    );
  }
};
