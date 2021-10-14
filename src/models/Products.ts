/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type ProductDocument = Document & {
  _id: string
  productName: string
  price: string
  category: string[]
  productType: string
  users: string[]
  variant: string[]
}

const ProductSchema = new mongoose.Schema({
  // productId: {
  //   type: String,
  //   unique: true,
  //   index: true,
  //   required: true,
  // },

  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    decimal: true,
  },
  category: [String],
  productType: {
    type: String,
    required: true,
  },
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
