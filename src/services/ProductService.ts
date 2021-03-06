import { ProductDocument } from '../models/Products'
import { UserDocument } from '../models/Users'
import Products from '../models/Products'
import Users from '../models/Users'
import { NotFoundError } from '../helpers/apiError'

//POST
const createProduct = async (productDocument: ProductDocument) => {
  const createdProduct = await productDocument.save()

  return createdProduct
}

const usersProduct = async (
  productId: string,
  userId: string,
  update: Partial<ProductDocument>
) => {
  const foundProduct = await Products.findById(productId, userId, {
    new: true,
  })
  console.log('still working', foundProduct)

  // const ProductUserId = await foundProduct.exists({ _id: _Id })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }
  foundProduct.users.push(userId)
  return await foundProduct.save()
}

//PUT
const updateProduct = async (
  productId: string,
  update: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  const foundProduct = await Products.findByIdAndUpdate(productId, update, {
    new: true,
  })

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

//DELETE
const deleteProduct = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Products.findByIdAndDelete(productId)

  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

//GET
const findProductById = async (productId: string): Promise<ProductDocument> => {
  const foundProduct = await Products.findById(productId).populate('users')
  if (!foundProduct) {
    throw new NotFoundError(`Product ${productId} not found`)
  }

  return foundProduct
}

//GET
const findAllProduct = async (): Promise<ProductDocument[]> => {
  return Products.find()
}

export default {
  usersProduct,
  createProduct,
  findProductById,
  findAllProduct,
  updateProduct,
  deleteProduct,
}
