import express, { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'
import { UserDocument } from '../models/Users'

const goggleLoginUsers = (req: Request, res: Response, next: NextFunction) => {
  const userData = req.user as UserDocument //from passport ask???
  //creates a token when the user login, receives three parameters: userData and if the userData contains a password destructure and omit the password
  const token = jwt.sign({ userData }, JWT_SECRET, { expiresIn: '1hr' })
  console.log('userdata', userData) //ask???
  res.json({ token: token })
}

export default goggleLoginUsers
