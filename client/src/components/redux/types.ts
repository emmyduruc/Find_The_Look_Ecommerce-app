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

export type Themes = {
  theme: string
}

export type cartState = {
  cart: ProductType[]
  count: number
}

export type countState ={

}


export type ProductState = {
  products: ProductType[]
  productId: string[]
}

export type RootState = {
  productReducer: ProductState
  cartReducer: cartState
  themeReducer: Themes
}
