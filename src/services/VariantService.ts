import { VariantDocument } from '../models/Variants'
import Variants from '../models/Variants'
import { NotFoundError } from '../helpers/apiError'

//POST
const createVariant = async (variantDocument: VariantDocument) => {
  const createdVariant = await variantDocument.save()
  return createdVariant
}

//PUT
const updateVariant = async (
  title: string,
  update: Partial<VariantDocument>
): Promise<VariantDocument | null> => {
  const foundVariant = await Variants.findByIdAndUpdate(title, update, {
    new: true,
  })

  if (!foundVariant) {
    throw new NotFoundError(`Variant ${title} not found`)
  }

  return foundVariant
}

//DELETE
const deleteVariant = async (
  title: string
): Promise<VariantDocument | null> => {
  const foundVariant = Variants.findByIdAndDelete(title)

  if (!foundVariant) {
    throw new NotFoundError(`Variant ${title} not found`)
  }

  return foundVariant
}

//GET
const findVariantByTitle = async (title: string): Promise<VariantDocument> => {
  const foundVariant = await Variants.findById(title)

  if (!foundVariant) {
    throw new NotFoundError(`Variant ${title} not found`)
  }

  return foundVariant
}

//GET
const findAllVariant = async (): Promise<VariantDocument[]> => {
  return Variants.find()
}

export default {
  createVariant,
  findVariantByTitle,
  findAllVariant,
  updateVariant,
  deleteVariant,
}
