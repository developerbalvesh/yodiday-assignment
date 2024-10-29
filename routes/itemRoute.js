const express = require("express");
const {
  getAllController,
  searchItemsController,
  findImageController,
} = require("../controller/itemController");

const router = express.Router();

router.get("/all", getAllController);

router.post("/search", searchItemsController);

router.get("/images/:filename", findImageController);

module.exports = router;
