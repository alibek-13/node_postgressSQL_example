import Router from "express"
import authcontroller from "../controller/user.controller.js"

const router = new Router();

router.post('/user', authcontroller.createUser)
router.get('/user', authcontroller.getUser)
router.get('/user/:id', authcontroller.getOneUser)
router.put('/user', authcontroller.updateUser)
router.delete('/user/:id', authcontroller.deleteUser)


export default router;