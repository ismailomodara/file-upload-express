const express = require("express");
const router = express.Router();

const { index, store } = require("../controllers/productController");
const { upload } = require("../controllers/uploadsController");

router.route("/").get(index).post(store)
router.route("/uploads").post(upload)

module.exports = router
