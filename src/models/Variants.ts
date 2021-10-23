/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type VariantDocument = Document & {
  brand: string
  color: string[]
  sizes: string[]
}

const variantSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  color: [String],
  sizes: [String],
})

export default mongoose.model<VariantDocument>('Variants', variantSchema)
