/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  _Id: string //do not specify it
  firstName: string
  lastName: string
  country: string
  state: string
  houseNumber: string
  phoneNumber?: string
  postcode?: string
  address: string
  email: string
  sex: string
  password: string
  picture: string
  product: string[]
  cart: string[]
}

const userSchema = new mongoose.Schema({
  // userId: {
  //   type: String,
  //   required: true,
  // },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  houseNumber: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  postcode: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    required: [true, '😀😀Add an email.'],
    unique: true,
  },
  password: {
    type: String,
    minlength: 4,
    select: false,
  },
  picture: {
    type: String,
  },
  sex: String,
  // cart: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId, // product property will be an array of objectId
  //     ref: 'Products', //referencing to Products(table)/model
  //   },
  // ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId, // product property will be an array of objectId
      ref: 'Products', //referencing to Products(table)/model
    },
  ],
})

export default mongoose.model<UserDocument>('Users', userSchema)
