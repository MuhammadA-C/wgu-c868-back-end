const express = require("express");
const router = express.Router();
const menuItemController = require("../controllers/menuItemController");

router
  .route("/")
  .get(menuItemController.getAllMenuItems)
  .post(menuItemController.checkBody, menuItemController.createMenuItem);

router
  .route("/:id")
  .get(menuItemController.getMenuItemByID)
  .patch(menuItemController.updateMenuItemByID)
  .delete(menuItemController.deleteMenuItemByID);

module.exports = router;
