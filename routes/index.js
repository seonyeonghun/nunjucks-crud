const express = require("express");
const router = express.Router();
const ctrl = require("./controller");

// routing
router.get("/", ctrl.index);
router.get("/about", ctrl.about);
router.get("/cs", ctrl.customer);

module.exports = router;
