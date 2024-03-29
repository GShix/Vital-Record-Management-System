const { getMyDeathApplication, submitDeathApplication } = require('../../controller/user/userController')

const router = require('express').Router()

router.route('/')
.post(submitDeathApplication)
.get(getMyDeathApplication)

module.exports = router