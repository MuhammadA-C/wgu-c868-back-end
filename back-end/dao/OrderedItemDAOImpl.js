const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

module.exports = class OrderedItemDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.orderedItems_table));
  }
};
