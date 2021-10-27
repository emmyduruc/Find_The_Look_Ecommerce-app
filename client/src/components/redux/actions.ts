import axios from 'axios'
import { ProductType } from './types'
import { Error } from './types'
import { Dispatch } from 'redux'

export const fetchProducts = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const products = await axios.get('/products')
      console.log('products from axios', products)
      dispatch(productList(products.data as ProductType[]))
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
export const incrementCount = () => {
  return {
    type: "INCREMENT_CART_COUNT",
  };
};
export const decrementCount = () => {
  return {
    type: "DECREMENT_CART_COUNT",
  };
};

export const lightTheme = () => {
  return {
    type: 'CHANGE_TO_LIGHT',
  }
}
export const darkTheme = () => {
  return {
    type: 'CHANGE_TO_DARK',
  }
}
type IncreMentCount ={type: "INCREMENT_CART_COUNT"}
type DecreMentCount ={type: "DECREMENT_CART_COUNT"}
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

export type AllActions =
  | DisplayError
  | ProductID
  | ProductList
  | RemoveCart
  | InsertCart
  | ThemeLight
  | ThemeDark
  |IncreMentCount
  |DecreMentCount
