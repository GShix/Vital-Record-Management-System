const { getDeathApplications, getSingleDeathApplication } = require('../../controller/admin/adminController')

const router = require('express').Router()

router.route('/')
.get(getDeathApplications)

router.route('/userApplicationId').get(getSingleDeathApplication)


module.exports = router