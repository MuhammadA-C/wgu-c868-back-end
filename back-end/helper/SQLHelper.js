class SQLHelper {
  static selectAll(table) {
    return `SELECT * FROM ${table}`;
  }

  static selectByID(table, id_value) {
    return `SELECT * FROM ${table} WHERE ID= ${id_value}`;
  }
}

module.exports.SQLHelper;
