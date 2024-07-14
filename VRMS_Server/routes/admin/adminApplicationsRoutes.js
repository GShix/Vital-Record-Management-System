import { getBirthApplications, getSingleBirthApplication, getDeathApplications, getSingleDeathApplication, verifyBirthApplications, rejectBirthApplications, rejectDeathApplications } from '../../controller/admin/adminController.js'

import { Router } from 'express'
const router = Router();

router.route('/birth')
.get(getBirthApplications)

router.route('/birth/:userApplicationId').get(getSingleBirthApplication)

router.route("/birth/birthVerification/:id").post(verifyBirthApplications)

router.route("birth/birthRejection/:id").post(rejectBirthApplications)

//death
router.route('/death')
.get(getDeathApplications)

router.route('/death/:userApplicationId').get(getSingleDeathApplication)

router.route("/death/deathVerification/:id").post(verifyBirthApplications)

router.route("/death/deathRejection/:id").post(rejectDeathApplications)

export default router;