import { AllActions } from '../../actions'
import { ProductState } from '../../types'

const initState = {
  products: [],
  productId: [],
  error: null,
}

const productReducer = (
  state: ProductState = initState,
  action: AllActions
) => {
  switch (action.type) {
    case 'PRODUCT_LIST':
      const productsPayload = action.payload
      return {
        ...state,
        products: productsPayload,
      }
    case 'PRODUCT_ID': {
      const productId = action.payload
      return {
        ...state,
        productId: productId,
      }
    }
    case 'FETCH_ERROR': {
      const getPayloadError = action.payload
      return {
        error: getPayloadError,
      }
    }

    default:
      return state
  }
}

export default productReducer
