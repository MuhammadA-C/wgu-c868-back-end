const express = require("express");
const app = express();

const menuItemRouter = require("./routers/menuItemRouter");
const orderedItemRouter = require("./routers/orderedItemRouter");
const orderIDRouter = require("./routers/orderIDRouter");

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

/*
  API calls to include:
    - Get all Ordered Items

    - Get an ordered item by id

    - Get all ordered items by order order id
*/

// 3. ROUTERS //
app.use("/api/v1/menu-items", menuItemRouter);
app.use("/api/v1/ordered-items", orderedItemRouter);
app.use("/api/v1/order-ids", orderIDRouter);

module.exports = app;
