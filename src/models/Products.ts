/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'
import { type } from 'os'

export type ProductDocument = Document & {
  _id: string
  productName: string
  price: string
  title: string
  description: string
  category: string
  users: string[]
  variant: string[]
  image: string
}

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    decimal: true,
  },
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
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
