/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  ProductId: string
  ProductName: string
  price: number
  category: string[]
  users: string[]
  variant: string[]
}

const ProductSchema = new mongoose.Schema({
  ProductId: {
    type: String,
    index: true,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    decimal: true,
  },
  category: [String],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId, // product property will be an array of objectId
      ref: 'Users', //referencing to products model
    },
  ],
  variant: [
    {
      type: mongoose.Schema.Types.ObjectId, // product property will be an array of objectId
      ref: 'Variants', //referencing to products model
    },
  ],
})

export default mongoose.model<ProductDocument>('Products', ProductSchema)
