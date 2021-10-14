import { UserDocument } from '../models/Users'
import Users from '../models/Users'
import { ProductDocument } from '../models/Products'
import Products from '../models/Products'
import { NotFoundError } from '../helpers/apiError'

// const productUsers = async () => {

// }

//POST
const createUser = async (userDocument: UserDocument) => {
  const createdUser = await userDocument.save()
  return createdUser
}

//PUT
const updateUser = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await Users.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

//DELETE
const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = Users.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

//GET
const findUserById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await Users.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

//GET
const findAllUser = async (): Promise<UserDocument[]> => {
  return Users.find()
}

export default {
  createUser,
  findUserById,
  findAllUser,
  updateUser,
  deleteUser,
}
