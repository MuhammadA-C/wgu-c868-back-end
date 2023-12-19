const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

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

    - Get all ordered items by order status/order id
    - Get all order statuses by customer id (technically, don't need since customer id is the same for this version)
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
  res.status(200).json({
    status: "success",
    results: "insert number of objects",
    data: { test: "test" },
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
app.put("/api/v1/menu-items", (req, res) => {
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
