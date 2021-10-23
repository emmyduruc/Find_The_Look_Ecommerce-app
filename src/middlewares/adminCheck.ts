import { Request, Response, NextFunction } from 'express'
import { ForbiddenError } from './../helpers/apiError'

type User = {
  role: string
}
const adminCheck = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as User
  const role = user.role

  if (role === 'admin') {
    next()
  } else {
    throw new ForbiddenError()
  }
}

export default adminCheck
