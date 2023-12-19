const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

module.exports = class OrderIDDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.orderStatus_table));
  }
};
