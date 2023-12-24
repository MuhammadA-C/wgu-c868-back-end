const OrderedItemDAOImpl = require("../dao/OrderedItemDAOImpl");
const inputValidation = require("../helper/inputValidation");

// Middleware //
// Checks if the client passed in too many values or too few values
exports.checkBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "Provided too few values",
    });
  } else if (Object.keys(req.body).length > 4) {
    /*
        Note: 4 in this case is in reference to the max amount of values
        that can be passed by the client to create and add an ordered item to 
        the database
    */
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
    inputValidation.isPropertyMissing(req.body.menu_item_id) ||
    inputValidation.isPropertyMissing(req.body.price) ||
    inputValidation.isPropertyMissing(req.body.quantity)
  ) {
    return res.status(400).json({
      status: "fail",
      message:
        "One or more of following properties are missing (order_id, menu_item_id, price, quantity)",
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

/*
  Notes:
    * Need to add a check to verify that the order id is valid (present in the order status table)
    * Need to add a check to verify if the menu item id is valid (present in the menu items table)

*/

// HTTP Methods for CRUD actions //

exports.createOrderedItem = (req, res) => {
  const { order_id, menu_item_id, price, quantity } = req.body;

  console.log("Hit create");

  OrderedItemDAOImpl.create(order_id, menu_item_id, price, quantity)
    .then(([rows, fieldData]) => {
      return res.status(201).json({
        status: "success",
        data: {
          ordered_item_id: rows.insertId,
          order_id,
          menu_item_id,
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

/*
  Note: Need to create middleware to check if the user entered more than 2 values
*/
exports.updateOrderedItemByID = (req, res) => {
  const promises = [];
  let counter = 0;
  const id = req.params.id;

  const obj = {
    price: req.body.picpriceture,
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
