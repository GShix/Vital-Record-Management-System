import adminLogin from "../../controller/admin/authController.js"
import { Router } from 'express'

const router = Router()

router.route("/login")
.post(adminLogin)

export default router;