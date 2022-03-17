const express = require("express");
const router = express.Router();

const recordController = require("../controllers/record_controller.js");
// router.get("/home", homeController.home);
// router.use("/user", require("./user.js"));
// router.use("/record", require("./record.js"));

// router.get("/",recordController.home);
router.post("/create", recordController.create);
router.post("/addsold", recordController.addSold);



module.exports = router;