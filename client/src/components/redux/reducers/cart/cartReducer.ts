import { AllActions } from '../../actions'
import { cartState } from '../../types'

const initState = {
  cart: [],
  count: 0,
}

const cartReducer = (state: cartState = initState, action: AllActions) => {
  switch (action.type) {
    case 'INSERT_PRODUCTS': {
      const incomingProducts = action.payload
      const existProduct = state.cart.find((productId) => {
        if (productId.includes(productId)) {
          return true
        }
        return false
      })
      if (existProduct) {
        return state
      } else {
        return {
          ...state,
          cart: [...state.cart, incomingProducts],
        }
      }
    }
    case 'REMOVE_PRODUCTS': {
      const incomingProductsId = action.payload
      const remainProduct = state.cart.filter(
        (productId) => productId !== incomingProductsId
      )
      return {
        ...state,
        cart: remainProduct,
      }
    }

    case 'INCREMENT_CART_COUNT': {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    case 'DECREMENT_CART_COUNT': {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    default:
      return state
  }
}

export default cartReducer

//   const removeProducts = state.cart.filter((productId) => {
//   if (removeProducts.length > 0) {
//     return {
//       ...state,
//       cart: [...removeProducts],
//     }
//   }
// } else {
//   return {
//     ...state,
//   }
// }
// })
