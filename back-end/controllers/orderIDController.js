const OrderIDDAOImpl = require("../dao/OrderIDDAOImpl");
const inputValidation = require("../helper/inputValidation");

// Middleware //
// Checks if the client passed in too many values or too few values
exports.checkBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "Provided too few values",
    });
  } else if (Object.keys(req.body).length > 5) {
    /*
        Note: 5 in this case is in reference to the max amount of values
        that can be passed by the client to create and add an order status to 
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
    inputValidation.isPropertyMissing(req.body.customer_id) ||
    inputValidation.isPropertyMissing(req.body.order_status) ||
    inputValidation.isPropertyMissing(req.body.order_placed_date)
  ) {
    return res.status(400).json({
      status: "fail",
      message:
        "One or more of following properties are missing (order_id, customer_id, order_status, order_placed_date)",
    });
  }
  next();
};

// Checks if the id passed by the clinet is valid by searching the database for it
exports.checkID = (req, res, next) => {
  OrderIDDAOImpl.getByID(
    inputValidation.formatStringURLParamaterForDB(req.params.id)
  ).then(([rows, fieldData]) => {
    if (rows.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: `ID: ${req.params.id} does not exist`,
      });
    }
    next();
  });
};

// HTTP Methods for CRUD actions //

exports.createOrderID = (req, res) => {
  let {
    order_id,
    customer_id,
    order_status,
    order_placed_date,
    order_completed_date,
  } = req.body;

  // Set the optional picture value if it is missing
  if (order_completed_date == undefined) {
    order_completed_date = "";
  }

  OrderIDDAOImpl.create(
    order_id,
    customer_id,
    order_status,
    order_placed_date,
    order_completed_date
  )
    .then(([rows, fieldData]) => {
      return res.status(201).json({
        status: "success",
        data: {
          order_id,
          customer_id,
          order_status,
          order_placed_date,
          order_completed_date,
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

exports.getAllOrderIDs = (req, res) => {
  OrderIDDAOImpl.fetchAll()
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

exports.getOrderIDByID = (req, res) => {
  OrderIDDAOImpl.getByID(
    inputValidation.formatStringURLParamaterForDB(req.params.id)
  )
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
exports.updateOrderIDByID = (req, res) => {
  const promises = [];
  let counter = 0;
  const id = inputValidation.formatStringURLParamaterForDB(req.params.id);

  const obj = {
    order_status: req.body.order_status,
    order_completed_date: req.body.order_completed_date,
  };

  // Updates the field in the database if a value was provided
  for (const key in obj) {
    if (obj[key] != undefined) {
      promises[counter] = OrderIDDAOImpl.update(key, obj[key], id);
      counter++;
    }
  }

  // Waits for all database updates to be done prior to responding back to the client
  Promise.all(promises)
    .then((result) => {
      OrderIDDAOImpl.getByID(id).then(([rows, fieldData]) => {
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

exports.deleteOrderIDByID = (req, res) => {
  OrderIDDAOImpl.delete(
    inputValidation.formatStringURLParamaterForDB(req.params.id)
  )
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
