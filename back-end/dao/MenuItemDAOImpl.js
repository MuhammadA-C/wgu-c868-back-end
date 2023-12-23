const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

module.exports = class MenuItemDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.menuItems_table));
  }

  static getByID(id) {
    return db.execute(
      sqlHelper.selectByID(db_tables.menuItems_table, "menu_item_id", id)
    );
  }

  static create(name, description, picture, price) {
    return db.execute(sqlHelper.insertMenuItem(), [
      name,
      description,
      picture,
      price,
    ]);
  }
};
