const express = require("express");
const app = express();

const menuItemRouter = require("./routers/menuItemRouter");

// MIDDLEWARE //
app.use(express.json());

// middleware to handle the CORS error with external domains making API calls to this API
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Checks if for the POST menu items request if the input is greater than 4
app.use((req, res, next) => {
  const MAX_INPUT = 4;

  if (req.url === "/api/v1/menu-items" && req.method === "POST") {
    if (Object.keys(req.body).length > MAX_INPUT) {
      res.status(400).json({
        status: "unsuccessful",
        message: "You provided too many values!!",
      });
      return;
    }
  }
  next();
});

// Checks if for the POST menu items request if the input is empty
app.use((req, res, next) => {
  if (req.url === "/api/v1/menu-items" && req.method === "POST") {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({
        status: "unsuccessful",
        message: "You provided too few values",
      });
      return;
    }
  }
  next();
});

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

// 3. ROUTERS //
app.use("/api/v1/menu-items", menuItemRouter);

module.exports = app;
