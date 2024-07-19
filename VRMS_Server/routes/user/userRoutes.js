import { getMyBirthApplication, submitBirthApplication, submitDeathApplication, getMyDeathApplication } from '../../controller/user/userController.js'
import { Router } from 'express'

const router = Router()
//birth
router.route('/register/birth-form').post(submitBirthApplication)
router.route("/status/birthApplication/:userApplicationId").get(getMyBirthApplication)

//death
router.route('/register/death-form').post(submitDeathApplication)

router.route("/status/deathApplication/:userApplicationId").get(getMyDeathApplication)

export default router;