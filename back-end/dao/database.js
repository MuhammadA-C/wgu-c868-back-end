const mysql = require("mysql2");
require("dotenv").config();

// Creates the database connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_TABLE,
  password: process.env.DB_PASSWORD,
});

module.exports = pool.promise();
