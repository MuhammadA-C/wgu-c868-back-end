const db = require("./database");
const sqlHelper = require("../helper/SQLHelper");

const menuItems_Table = "MenuItems";

module.exports = class MenuItemDAOImpl {
  static menuItems;

  static fetchAll() {
    db.execute(SQLHelper.selectAll);
  }
};
