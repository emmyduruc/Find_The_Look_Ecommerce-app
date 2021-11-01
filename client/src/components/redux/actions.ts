import axios from 'axios'
import { ProductType } from './types'
import { Error } from './types'
import { Dispatch } from 'redux'
import { type } from 'os'

export const fetchProducts = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const products = await axios.get<ProductType[]>('/products')
      console.log('products from axios', products)
      dispatch(productList(products.data))
    } catch (error) {
      dispatch(displayError(error))
    }
  }
}

export const productList = (productsItems: ProductType[]) => {
  return {
    type: 'PRODUCT_LIST',
    payload: productsItems,
  }
}

export const fetchProducts_Id = (product_id: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const products = await axios.get(`/products/${product_id}`)
      console.log('products from axios', products)
      dispatch(productList(products.data as ProductType[]))
    } catch (error) {
      dispatch(displayError(error))
    }
  }
}
export const productsId = (data: ProductType) => {
  return {
    type: 'PRODUCT_ID',
    payload: data,
  }
}

export const displayError = (error: any) => {
  return {
    type: 'FETCH_ERROR',
    payload: error,
  }
}
export const insertCart = (products: ProductType) => {
  return {
    type: 'INSERT_PRODUCTS',
    payload: products,
  }
}

export const removeCart = (products_id: string) => {
  return {
    type: 'REMOVE_PRODUCTS',
    payload: products_id,
  }
}
export const InsertFavourite = (products: ProductType) => {
  return {
    type: 'INSERT_FAVOURITE',
    payload: products,
  }
}
export const removeFavourite = (productsId: string) => {
  return {
    type: 'REMOVE_FAVOURITE',
    payload: productsId,
  }
}
export const incrementCount = () => {
  return {
    type: 'INCREMENT_CART_COUNT',
  }
}
export const decrementCount = () => {
  return {
    type: 'DECREMENT_CART_COUNT',
  }
}
export const openDrawer = () => {
  return {
    type: 'OPEN_DRAWER',
  }
}
export const closeDrawer = () => {
  return {
    type: 'CLOSE_DRAWER',
  }
}
export const isLogin = () => {
  return {
    type: 'IS_LOGIN',
  }
}

export const toggleTheme = () => {
  return {
    type: 'TOGGLETHEME',
  }
}
// export const darkTheme = () => {
//   return {
//     type: 'CHANGE_TO_DARK',
//   }
// }
export const darkTheme = () => {
  return {
    type: 'CHANGE_TO_DARK',
  }
}
type IS_LOGIN = { type: 'IS_LOGIN' }
type OpenDrawer = { type: 'OPEN_DRAWER' }
type CloseDrawer = { type: 'CLOSE_DRAWER' }
type ToggleTheme = { type: 'TOGGLETHEME' }
type IncreMentCount = { type: 'INCREMENT_CART_COUNT' }
type DecreMentCount = { type: 'DECREMENT_CART_COUNT' }
type ThemeLight = { type: 'CHANGE_TO_LIGHT' }
type ThemeDark = { type: 'CHANGE_TO_DARK' }
type DisplayError = {
  type: 'FETCH_ERROR'
  payload: any
}
type ProductID = {
  type: 'PRODUCT_ID'
  payload: ProductType
}
type ProductList = {
  type: 'PRODUCT_LIST'
  payload: ProductType[]
}
type RemoveCart = {
  type: 'REMOVE_PRODUCTS'
  payload: string
}
type InsertCart = {
  type: 'INSERT_PRODUCTS'
  payload: ProductType
}
type InsertFavourite = {
  type: 'INSERT_FAVOURITE'
  payload: ProductType
}
type RemoveFavourite = {
  type: 'REMOVE_FAVOURITE'
  payload: string
}

export type AllActions =
  | DisplayError
  | ProductID
  | ProductList
  | RemoveCart
  | InsertCart
  | ThemeLight
  | ThemeDark
  | IncreMentCount
  | DecreMentCount
  | ToggleTheme
  | InsertFavourite
  | RemoveFavourite
  | CloseDrawer
  | OpenDrawer
  | IS_LOGIN
