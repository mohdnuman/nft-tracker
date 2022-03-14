const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller.js");
router.get("/home", homeController.home);
router.use("/user", require("./user.js"));

module.exports = router;