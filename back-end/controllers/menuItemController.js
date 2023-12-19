const MenuItemDAOImpl = require("../dao/MenuItemDAOImpl");

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
        res.status(200).json({
          status: "success",
          results: rows.length,
          message: "Database has no data for the MenuItems table",
        });
        return;
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
