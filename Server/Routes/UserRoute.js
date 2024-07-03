import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unfollowUser, updateUser } from '../controllers/UserController.js'
import AuthMiddleWare from '../Middleware/AuthMiddleware.js';

const router = express.Router()

router.get('/:id', getUser);
router.get('/',getAllUsers)
router.put('/:id',AuthMiddleWare, updateUser)
router.delete('/:id',AuthMiddleWare, deleteUser)
router.put('/:id/follow',AuthMiddleWare, followUser)
router.put('/:id/unfollow',AuthMiddleWare, unfollowUser)

export default router