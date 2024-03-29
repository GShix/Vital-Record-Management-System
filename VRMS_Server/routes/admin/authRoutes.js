const { adminLogin } = require("../../controller/admin/authController");

const router = require("express").Router();

router.route("/login")
.post(adminLogin)

module.exports = router