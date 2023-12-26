const OrderedItemDAOImpl = require("../dao/OrderedItemDAOImpl");
const inputValidation = require("../helper/inputValidation");
const MenuItemDAOImpl = require("../dao/MenuItemDAOImpl"); //Used in the middleware to verify the menu item id
const OrderIDDAOImpl = require("../dao/OrderIDDAOImpl"); //Used in the middleware to verify the order id

// Middleware //
// Checks if the client passed in too many values or too few values
exports.checkBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "Provided too few values",
    });
  } else if (Object.keys(req.body).length > 4) {
    // 4 represents the max amount of fields the user can change for the object
    return res.status(400).json({
      status: "fail",
      message: "Provided too many values!",
    });
  }
  next();
};

// Checks if the client did not pass in required values
exports.checkBodyForMissingRequiredValues = (req, res, next) => {
  // Note: For numbers I'll need a different isPropertyMissing method since it isn't a string
  if (
    inputValidation.isPropertyMissing(req.body.order_id) ||
    inputValidation.isPropertyMissing(req.body.menu_item_name) ||
    inputValidation.isPropertyMissing(req.body.price) ||
    inputValidation.isPropertyMissing(req.body.quantity)
  ) {
    return res.status(400).json({
      status: "fail",
      message:
        "One or more of following properties are missing (order_id, menu_item_name, price, quantity)",
    });
  }
  next();
};

// Checks if the id passed by the clinet is valid by searching the database for it
exports.checkID = (req, res, next) => {
  OrderedItemDAOImpl.getByID(req.params.id).then(([rows, fieldData]) => {
    if (rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: `ID: ${req.params.id} does not exist`,
      });
    }
    next();
  });
};

// Checks if the order id passed by the client is valid by searching the database for it
exports.checkOrderID = (req, res, next) => {
  OrderIDDAOImpl.getByID(
    inputValidation.formatStringURLParamaterForDB(req.body.order_id)
  ).then(([rows, fieldData]) => {
    if (rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: `Order ID with ID: ${req.body.order_id} does not exist`,
      });
    }
    next();
  });
};

// HTTP Methods for CRUD actions //

exports.createOrderedItem = (req, res) => {
  const { order_id, menu_item_name, price, quantity } = req.body;

  OrderedItemDAOImpl.create(order_id, menu_item_name, price, quantity)
    .then(([rows, fieldData]) => {
      return res.status(201).json({
        status: "success",
        data: {
          ordered_item_id: rows.insertId,
          order_id,
          menu_item_name,
          price,
          quantity,
        },
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: "Error",
        message: error,
      });
    });
};

exports.getAllOrderedItems = (req, res) => {
  OrderedItemDAOImpl.fetchAll()
    .then(([rows, fieldData]) => {
      // Checks to see if the database returned any data
      if (rows.length != 0) {
        return res.status(200).json({
          status: "success",
          results: rows.length,
          data: rows,
        });
      }

      // Database returned no data
      return res.status(204).json();
    })
    .catch((error) => {
      return res.status(500).json({
        status: "Error",
        message: error,
      });
    });
};

exports.getOrderedItemByID = (req, res) => {
  OrderedItemDAOImpl.getByID(req.params.id)
    .then(([rows, fieldData]) => {
      return res.status(200).json({
        status: "success",
        data: rows,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: "Error",
        message: error,
      });
    });
};

exports.updateOrderedItemByID = (req, res) => {
  const promises = [];
  let counter = 0;
  const id = req.params.id;

  const obj = {
    price: req.body.price,
    quantity: req.body.quantity,
  };

  // Updates the field in the database if a value was provided
  for (const key in obj) {
    if (obj[key] != undefined) {
      promises[counter] = OrderedItemDAOImpl.update(key, obj[key], id);
      counter++;
    }
  }

  // Waits for all database updates to be done prior to responding back to the client
  Promise.all(promises)
    .then((result) => {
      OrderedItemDAOImpl.getByID(id).then(([rows, fieldData]) => {
        return res.status(200).json({
          status: "success",
          data: rows,
        });
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: "Error",
        message: error,
      });
    });
};

exports.deleteOrderedItemByID = (req, res) => {
  OrderedItemDAOImpl.delete(req.params.id)
    .then((result) => {
      return res.status(204).json();
    })
    .catch((error) => {
      return res.status(500).json({
        status: "Error",
        message: error,
      });
    });
};
