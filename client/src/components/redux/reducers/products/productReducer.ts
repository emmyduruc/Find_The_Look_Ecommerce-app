import {AllActions} from '../../actions'



const initState = {
  products: [],
  productId: []
}

const productReducer = (state = initState, action: AllActions ) => {
  switch (action.type) {
    case 'PRODUCT_LIST':
      const productsPayload = action.payload
      return {
        ...state,
        products: productsPayload,
      }
      case 'PRODUCT_ID':
        const productId = action.payload
        return {
          ...state,
          productId: productId,
        }
        default:
      return state;
  }

}

export default productReducer
