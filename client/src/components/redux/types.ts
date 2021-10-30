export type ProductType = {
  _id: string
  productName: string
  price: string
  category: string[]
  productType: string
  users: string[]
  variant: string[]
  image: string
  title: string
  description: string
}

export type Error = {
  error: string
}
export type IsDark = {
  theme: boolean
}

export type cartState = {
  cart: ProductType[]
  count: number
  favourites: ProductType[]
  openCartDrawer: boolean
  isLoggedIn: boolean
}

export type ProductState = {
  products: ProductType[]
  productId: string[]
  error: null
}

export type RootState = {
  productReducer: ProductState
  cartReducer: cartState
  themeReducer: IsDark
}
