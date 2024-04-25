const { getDeathCertificate } = require('../../controller/user/userCertificate')
const { getMyDeathApplication, submitDeathApplication } = require('../../controller/user/userController')
const { authenticateUser } = require('../../middleware/authenticateUser')

const router = require('express').Router()

router.route('/')
.post(submitDeathApplication)

router.route('/:userApplicationId')
// .get(getMyDeathApplication)

router.route("/certificate/otp")
.post(authenticateUser,getDeathCertificate)
module.exports = router