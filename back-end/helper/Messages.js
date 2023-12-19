module.exports = class Messages {
  static dbHasNoDataForTable(db_table) {
    return `Database has no data for table ${db_table}`;
  }

  static successfulRequest() {
    return "success";
  }

  static unsuccessfulRequest() {
    return "unsuccessful";
  }
};
