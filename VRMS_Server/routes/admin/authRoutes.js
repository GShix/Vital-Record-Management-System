const { adminLogin } = require("../../controller/admin/authController")

const router = require("express").Router()

router.route("/")
.post(adminLogin)


module.exports = router