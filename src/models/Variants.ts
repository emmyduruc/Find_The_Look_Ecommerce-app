/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type VariantDocument = Document & {
  title: string
  brand: string
  color: string[]
  sizes: string[]
  descriptions: string[]
}

const variantSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: [String],
  sizes: [String],
  descriptions: {
    type: String,
  },
})

export default mongoose.model<VariantDocument>('Variants', variantSchema)
