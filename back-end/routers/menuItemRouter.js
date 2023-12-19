const express = require("express");
const MenuItemDAOImpl = require("../dao/MenuItemDAOImpl");
const router = express.Router();

const createMenuItem = (req, res) => {
  //const { name, description, picture, price } = req.body;

  /*
      Need database call
    */
  res.status(201).json({
    status: "success",
    data: { test: "test" },
  });
};

const getAllMenuItems = (req, res) => {
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

const getMenuItemByID = (req, res) => {
  /*
      Need database call
    */
  res.status(200).json({
    status: "success",
    data: { test: "test" },
  });
};

const updateMenuItemByID = (req, res) => {
  /*
      Need database call
  */
  res.status(200).json({
    status: "success",
    data: { test: "test" },
  });
};

const deleteMenuItemByID = (req, res) => {
  /*
      Need database call
  */
  res.status(204).json({
    status: "success",
    data: null,
  });
};

router.route("/").get(getAllMenuItems).post(createMenuItem);

router
  .route("/:id")
  .get(getMenuItemByID)
  .patch(updateMenuItemByID)
  .delete(deleteMenuItemByID);

module.exports = router;
