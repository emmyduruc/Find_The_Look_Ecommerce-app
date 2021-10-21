import express from 'express'
import passport from 'passport'
import {
  createUser,
  findUserById,
  deleteUser,
  findAllUser,
  updateUser,
} from '../controllers/userController'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAllUser)
router.get('/:userId', findUserById)
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUser
)
router.delete('/:userId', deleteUser)
router.post('/', createUser)

export default router
