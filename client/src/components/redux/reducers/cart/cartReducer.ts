import { AllActions } from '../../actions'
import { cartState } from '../../types'

const initState = {
  cart: [],
  count: 0,
  favourites: [],
  openCartDrawer: false,
}

const cartReducer = (state: cartState = initState, action: AllActions) => {
  switch (action.type) {
    case 'INSERT_PRODUCTS': {
      const incomingProducts = action.payload
      const existProduct = state.cart.find(item=>item._id === incomingProducts._id)
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
        (item) => item._id !== incomingProductsId
      )
      return {
        ...state,
        favourites: remainProduct,
      }
    }
    case 'INSERT_FAVOURITE': {
      const incomingProducts = action.payload
      const existProduct = state.cart.find(item=>item._id === incomingProducts)
      if (existProduct) {
        return state
      } else {
        return {
          ...state,
          favourites: [...state.favourites, incomingProducts],
        }
      }
    }
    case 'REMOVE_FAVOURITE': {
      const incomingProductsId = action.payload
      const remainProduct = state.cart.filter(
        (item) => item._id !== incomingProductsId
      )
      return {
        ...state,
        favourites: remainProduct,
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
    case "OPEN_DRAWER":
      return {
        ...state,
        openCartDrawer: true,
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        openCartDrawer: false,
      };
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
