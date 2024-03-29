
const { getMyBirthApplication, submitBirthApplication } = require('../../controller/user/userController')

const router = require('express').Router()

router.route('/')
.post(submitBirthApplication)
.get(getMyBirthApplication)

module.exports = router