const express = require("express");
const db = require("./dao/database");

const app = express();
const PORT = process.env.PORT || 3001;

const MenuItemDAOImpl = require("./dao/MenuItemDAOImpl");
const OrderedIDDAO = require("./dao/OrderIDDAOImpl");

/*
MenuItemDAOImpl.fetchAll()
  .then(([rows, fieldData]) => {
    console.log(rows);
  })
  .catch((err) => {
    throw err;
  });
*/

// MIDDLEWARE //
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// HTTP Methods //

/*
  API calls to include:
    - Get all Menu Items
    - Get all Ordered Items
    - Get all Order Status

    - Get a menu item by id
    - Get an ordered item by id
    - Get an order status by id

    - Get all ordered items by order order id
*/

// Create
app.post("/api/v1/menu-items", (req, res) => {
  res.status(201).json({
    status: "success",
    data: { test: "test" },
  });
});

// Read
app.get("/api/v1/menu-items", (req, res) => {
  MenuItemDAOImpl.fetchAll()
    .then(([rows, fieldData]) => {
      // API response below
      if (rows.length == 0) {
        res.status(200).json({
          status: "success",
          results: rows.length,
          message: "The database has no data for said table",
        });
      } else {
        res.status(200).json({
          status: "success",
          results: rows.length,
          data: rows,
        });
      }
    })
    .catch((err) => {
      throw err;
    });
});

// Read
app.get("/api/v1/menu-items/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { test: "test" },
  });
});

// Update
app.patch("/api/v1/menu-items/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: { test: "test" },
  });
});

// Delete
app.delete("/api/v1/menu-items/:id", (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
});

///////////////////

app.listen(PORT);
