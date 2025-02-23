const express = require('express');
const router = express.Router();

const eth = require("./Eth/routes")
const bzz = require("./Bzz/routes")
const shh = require("./Shh/routes")
const utils = require("./Utils/routes")


// ====================================================================
//                          Infura Router(s)
// ====================================================================

router.use("/bzz", bzz);
router.use("/eth", eth);
router.use("/shh", shh);
router.use("/utils", utils);




// ====================================================================

module.exports = router;
