const exppress = require("express");
const router = exppress.Router();
const { addOrder, finOrder } = require("../controller/orderController.js");

router.route("/addorder").post(addOrder);

router.route("/findorder/:userId").get(finOrder);
module.exports = router;
