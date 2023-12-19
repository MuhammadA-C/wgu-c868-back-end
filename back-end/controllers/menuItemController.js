const MenuItemDAOImpl = require("../dao/MenuItemDAOImpl");
const inputValidation = require("../helper/inputValidation");

// Middleware //
exports.checkBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: "fail",
      message: "Provided too few values",
    });
  } else if (Object.keys(req.body).length > 4) {
    /*
        Note: 4 in this case is in reference to the max amount of values
        that can be passed by the client to create and add a menu item to 
        the database
    */
    return res.status(400).json({
      status: "fail",
      message: "Provided too many values!!",
    });
  }
  next();
};

exports.checkBodyForMissingRequiredValues = (req, res, next) => {
  if (
    inputValidation.isPropertyMissing(req.body.name) ||
    inputValidation.isPropertyMissing(req.body.price)
  ) {
    return res.status(400).json({
      status: "fail",
      message: "The name or price property is null or an empty string",
    });
  }
  next();
};

// HTTP Methods for CRUD actions //

/*
  Note: I need to check for empty lists returned from database calls
  when getting by ID. This happens because the id isn't found in the database.
*/

exports.createMenuItem = (req, res) => {
  //const { name, description, picture, price } = req.body;

  /*
      Need database call
    */
  res.status(201).json({
    status: "success",
    data: { test: "test" },
  });
};

exports.getAllMenuItems = (req, res) => {
  MenuItemDAOImpl.fetchAll()
    .then(([rows, fieldData]) => {
      if (rows.length == 0) {
        return res.status(200).json({
          status: "success",
          results: rows.length,
          message: "Database has no data for the MenuItems table",
        });
      }

      res.status(200).json({
        status: "success",
        results: rows.length,
        data: rows,
      });
    })
    .catch((err) => {
      throw err;
    });
};

exports.getMenuItemByID = (req, res) => {
  /*
      Need database call
    */
  res.status(200).json({
    status: "success",
    data: { test: "test" },
  });
};

exports.updateMenuItemByID = (req, res) => {
  /*
      Need database call
  */
  res.status(200).json({
    status: "success",
    data: { test: "test" },
  });
};

exports.deleteMenuItemByID = (req, res) => {
  /*
      Need database call
  */
  res.status(204).json({
    status: "success",
    data: null,
  });
};
