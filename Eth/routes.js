const express = require('express');
const router = express.Router();

const abi = require("./Abi/routes")
const accounts = require("./Accounts/routes")
const contracts = require("./Contract/routes")
const ens = require("./Ens/routes")
const iban = require("./Iban/routes")
const personal = require("./Personal/routes")
const subscribe = require("./Subscribe/routes")


// ====================================================================
//                          InFura Eth Route(s)
// ====================================================================

router.use("/abi", abi);
router.use("/accounts", accounts);
router.use("/contracts", contracts);
router.use("/ens", ens);
router.use("/iban", iban);
router.use("/abi", personal);
router.use("/abi", subscribe);



// ====================================================================

module.exports = router;
