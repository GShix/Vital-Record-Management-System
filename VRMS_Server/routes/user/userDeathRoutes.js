const { getMyDeathApplication, submitDeathApplication } = require('../../controller/user/userController')

const router = require('express').Router()

router.route('/')
.post(submitDeathApplication)

router.route('/:userApplicationId')
// .get(getMyDeathApplication)

module.exports = router