// import express, { Request, Response, NextFunction } from 'express'
import passport from 'passport'
// import jwt from 'jsonwebtoken'
// import {JWT_SECRET} from '../util/secrets'
// import { UserDocument } from '../models/Users'
import express from 'express'
import goggleLoginUsers from '../controllers/googleLoginController'

const router = express.Router()

router.post(
  '/',
  passport.authenticate('google-id-token', { session: false }),
  goggleLoginUsers
)

export default router

// router.post(
//   '/',passport.authenticate('google-id-token',{session: false}),(req: Request, res: Response, next: NextFunction) => {
//          const userData = req.user as UserDocument//from passport ask???
//          const token = jwt.sign(userData, JWT_SECRET,{expiresIn: '1hr'})// receives three parameters: userData and if the userData contains a password destructure and omit the password
//          console.log('userdata', userData) //ask???
//     res.json(token)
//   }
// )
