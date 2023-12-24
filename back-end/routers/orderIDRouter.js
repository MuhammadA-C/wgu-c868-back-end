const express = require("express");
const router = express.Router();
const orderIDController = require("../controllers/orderIDController");

router
  .route("/")
  .get(orderIDController.getAllOrderIDs)
  .post(
    orderIDController.checkBody,
    orderIDController.checkBodyForMissingRequiredValues,
    orderIDController.createOrderID
  );

router
  .route("/:id")
  .get(orderIDController.checkID, orderIDController.getOrderIDByID)
  .patch(
    orderIDController.checkID,
    orderIDController.checkBody,
    orderIDController.updateOrderIDByID
  )
  .delete(orderIDController.checkID, orderIDController.deleteOrderIDByID);

router
  .route("/:id/ordered-items")
  .get(
    orderIDController.checkID,
    orderIDController.getAllOrderedItemsByOrderID
  );

module.exports = router;
