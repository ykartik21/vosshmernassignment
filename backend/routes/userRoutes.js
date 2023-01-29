const exppress = require("express");
const router = exppress.Router();
const { registerUser, authUser } = require("../controller/userController.js");

router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;
