const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");
const db_tables = require("../helper/DBTable");

const menuItemID_col = "menu_item_id";

module.exports = class MenuItemDAOImpl {
  static fetchAll() {
    return db.execute(sqlHelper.selectAll(db_tables.menuItems_table));
  }

  static getByID(id) {
    return db.execute(
      sqlHelper.selectByID(db_tables.menuItems_table, menuItemID_col, id)
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

  static update(updateColumnName, updateValue, id) {
    return db.execute(
      sqlHelper.update(
        db_tables.menuItems_table,
        updateColumnName,
        menuItemID_col
      ),
      [updateValue, id]
    );
  }

  static delete(id) {
    return db.execute(
      sqlHelper.deleteByID(db_tables.menuItems_table, menuItemID_col, id)
    );
  }
};
