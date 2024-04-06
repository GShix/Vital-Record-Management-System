const { getBirthApplications, getSingleBirthApplication, getDeathApplications, getSingleDeathApplication } = require('../../controller/admin/adminController')

const router = require('express').Router()

router.route('/birth')
.get(getBirthApplications)

router.route('/birth/:userApplicationId').get(getSingleBirthApplication)

//death
router.route('/death')
.get(getDeathApplications)

router.route('/death/:userApplicationId').get(getSingleDeathApplication)

module.exports = router