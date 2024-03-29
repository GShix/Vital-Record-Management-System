const { getBirthApplications, getSingleBirthApplication } = require('../../controller/admin/adminController')

const router = require('express').Router()

router.route('/')
.get(getBirthApplications)

router.route('/:userApplicationId').get(getSingleBirthApplication)

module.exports = router