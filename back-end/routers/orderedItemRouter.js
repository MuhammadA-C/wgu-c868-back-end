const express = require("express");
const router = express.Router();
const orderedItemController = require("../controllers/orderedItemController");

router
  .route("/")
  .get(orderedItemController.getAllOrderedItems)
  .post(
    orderedItemController.checkBody,
    orderedItemController.checkOrderID,
    orderedItemController.checkBodyForMissingRequiredValues,
    orderedItemController.createOrderedItem
  );

router
  .route("/:id")
  .get(orderedItemController.checkID, orderedItemController.getOrderedItemByID)
  .patch(
    orderedItemController.checkID,
    orderedItemController.checkOrderID,
    orderedItemController.checkBody,
    orderedItemController.updateOrderedItemByID
  )
  .delete(
    orderedItemController.checkID,
    orderedItemController.deleteOrderedItemByID
  );

module.exports = router;
