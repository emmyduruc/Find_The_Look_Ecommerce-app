import axios from 'axios'
import { Product } from './types'
import { Dispatch } from 'redux'

export const fetchProducts = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      //       const products = await axios.get('/products')
      //console.log ("products from axios", products)
      //       dispatch(productList(products))
    } catch (error) {
      dispatch(displayError(error))
    }
  }
}

export const productList = (productsItems: Product[]) => {
  return {
    type: 'PRODUCT_LIST',
    payload: productsItems,
  }
}

export const fetchProducts_Id = (product_id: string) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      //       const products = await axios.get(`/products/${product_id}`)
      //       console.log ("products from axios", products)
      //       dispatch(productsId(products))
    } catch (error) {
      dispatch(displayError(error))
    }
  }
}
export const productsId = (data: Product) => {
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
export const insertCart = (products: Product) => {
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

type DisplayError = ReturnType<typeof displayError>
type ProductID = ReturnType<typeof productsId>
type ProductList = ReturnType<typeof productList>
type RemoveCart = ReturnType<typeof removeCart>
type InsertCart = ReturnType<typeof insertCart>

export type AllActions =
  | DisplayError
  | ProductID
  | ProductList
  | RemoveCart
  | InsertCart
