import { ProductDocument } from '../models/Products'
import Products from '../models/Products'
import { NotFoundError } from '../helpers/apiError'

//POST
const createProduct = async (productDocument: ProductDocument) => {
  const createdProduct = await productDocument.save()
  return createdProduct
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
  const foundProduct = await Products.findById(productId)

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
  createProduct,
  findProductById,
  findAllProduct,
  updateProduct,
  deleteProduct,
}
