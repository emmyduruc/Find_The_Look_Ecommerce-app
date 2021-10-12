/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  userId: string
  firstName: string
  lastName: string
  address: string
  sex: string
  //   female: boolean
  product: string[]
}

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  sex: String,

  product: [
    {
      type: mongoose.Schema.Types.ObjectId, // product property will be an array of objectId
      ref: 'Products', //referencing to Products(table)/model
    },
  ],
})

export default mongoose.model<UserDocument>('Users', userSchema)
