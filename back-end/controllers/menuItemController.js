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
      message: "Provided too many values!",
    });
  }
  next();
};

exports.checkBodyForMissingRequiredValues = (req, res, next) => {
  // Note: For numbers I'll need a different isPropertyMissing method since it isn't a string
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

exports.createMenuItem = (req, res) => {
  let { name, description, picture, price } = req.body;

  // Set the optional picture value if it is missing
  if (picture == undefined) {
    picture = "";
  }

  // Set the optional description value if it is missing
  if (description == undefined) {
    description = "";
  }

  MenuItemDAOImpl.create(name, description, picture, price)
    .then(([rows, fieldData]) => {
      return res.status(201).json({
        status: "success",
        data: {
          menu_item_id: rows.insertId,
          name,
          description,
          picture,
          price,
        },
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: "ERROR",
        message: error,
      });
    });
};

exports.getAllMenuItems = (req, res) => {
  MenuItemDAOImpl.fetchAll()
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
        status: "ERROR",
        message: error,
      });
    });
};

exports.getMenuItemByID = (req, res) => {
  MenuItemDAOImpl.getByID(req.params.id)
    .then(([rows, fieldData]) => {
      // Checks if the database returned an object that matched the id
      if (rows.length != 0) {
        return res.status(200).json({
          status: "success",
          data: rows,
        });
      }

      // No object was found with that id
      return res.status(204).json();
    })
    .catch((error) => {
      return res.status(500).json({
        status: "ERROR",
        message: error,
      });
    });
};

exports.updateMenuItemByID = (req, res) => {
  /*
      Need database call
  */
  return res.status(200).json({
    status: "success",
    data: { test: "test" },
  });
};

exports.deleteMenuItemByID = (req, res) => {
  /*
      Need database call
  */
  return res.status(204).json();
};
