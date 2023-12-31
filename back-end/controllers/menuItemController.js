const MenuItemDAOImpl = require("../dao/MenuItemDAOImpl");
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

// Checks if the id passed by the clinet is valid by searching the database for it
exports.checkID = (req, res, next) => {
  MenuItemDAOImpl.getByID(req.params.id).then(([rows, fieldData]) => {
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
        status: "Error",
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
        status: "Error",
        message: error,
      });
    });
};

exports.getMenuItemByID = (req, res) => {
  MenuItemDAOImpl.getByID(req.params.id)
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

exports.updateMenuItemByID = (req, res) => {
  const promises = [];
  let counter = 0;
  const id = req.params.id;

  const obj = {
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture,
    price: req.body.price,
  };

  // Updates the field in the database if a value was provided
  for (const key in obj) {
    if (obj[key] != undefined) {
      promises[counter] = MenuItemDAOImpl.update(key, obj[key], id);
      counter++;
    }
  }

  // Waits for all database updates to be done prior to responding back to the client
  Promise.all(promises)
    .then((result) => {
      MenuItemDAOImpl.getByID(id).then(([rows, fieldData]) => {
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

exports.deleteMenuItemByID = (req, res) => {
  MenuItemDAOImpl.delete(req.params.id)
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
