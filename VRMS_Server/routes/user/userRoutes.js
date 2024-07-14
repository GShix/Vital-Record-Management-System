import { getMyBirthApplication, submitBirthApplication, submitDeathApplication, getMyDeathApplication } from '../../controller/user/userController.js'
import { Router } from 'express'

const router = Router()
router.route('/')
.post(submitBirthApplication)
.get(getMyBirthApplication)

//death
router.route('/death/deathRegistration').post(submitDeathApplication)

router.route("/deathApplication/:userApplicationId").get(getMyDeathApplication)

export default router;