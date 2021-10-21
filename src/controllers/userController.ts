import { Request, Response, NextFunction } from 'express'
import UserModel from '../models/Users'
import UserService from '../services/userService'
import { BadRequestError } from '../helpers/apiError'
import { UserDocument } from '../models/Users'
//POST/creates Users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      country,
      state,
      houseNumber,
      phoneNumber,
      postcode,
      email,
      password,
      address,
      sex,
      product = [],
    } = req.body
    const user = new UserModel({
      firstName,
      lastName,
      country,
      email,
      password,
      state,
      houseNumber,
      phoneNumber,
      postcode,
      address,
      sex,
      product,
    })
    const createdUser = await UserService.createUser(user)
    res.json(createdUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /users/:userId //replaces an existing resource
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userData = req.user as UserDocument
  console.log('userData...', userData)
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await UserService.updateUser(userId, update)
    res.json(updatedUser)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /users/:userId //Delete an existing resource
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserService.deleteUser(req.params.userId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /users/:userId //get the existing resource
export const findUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findUserById(req.params.userId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /users (gets all existing users)
export const findAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await UserService.findAllUser())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
//   findUserById,
//   deleteUser,
//   findAllUser,
//   updateUser,
