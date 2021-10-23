import { Request, Response, NextFunction } from 'express'
import VariantModel from '../models/Variants'
import VariantService from '../services/VariantService'
import { BadRequestError } from '../helpers/apiError'

//POST/creates Users
export const createVariant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brand, color, sizes } = req.body
    const products = new VariantModel({
      brand,
      color,
      sizes,
    })
    const createdVariant = await VariantService.createVariant(products)
    res.json(createdVariant)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /variants/:title //replaces an existing resource
export const updateVariant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const title = req.params.title
    const updatedVariant = await VariantService.updateVariant(title, update)
    res.json(updatedVariant)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /variants/:title //Delete an existing resource
export const deleteVariant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await VariantService.deleteVariant(req.params.title)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /variants/:title //get the existing resource
export const findVariantByTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await VariantService.findVariantByTitle(req.params.title))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /variants (gets all existing users)
export const findAllVariant = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await VariantService.findAllVariant())
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
