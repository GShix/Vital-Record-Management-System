const { getBirthApplications, getSingleBirthApplication } = require('../../controller/admin/adminController')

const router = require('express').Router()

router.route('/birth')
.get(getBirthApplications)

router.route('birth/:userApplicationId').get(getSingleBirthApplication)

//death
router.route('/death')
.get(getBirthApplications)

router.route('/death/:userApplicationId').get(getSingleBirthApplication)

module.exports = router