import { AllActions } from '../../actions'

const initState = {
  cart: [],
}

const cartReducer = (state = initState, action: AllActions) => {
  switch (action.type) {
    case 'INSERT_PRODUCTS':
      const incomingProducts = action.payload
      const existProduct = state.cart.find((product) => {
        // if (incomingProducts === product._id) {
        //   return true
        // }
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
    case 'REMOVE_PRODUCTS':
    // const removeProducts = state.cart.filter((product) => {
    //   if (product._id !== incomingProducts._id) {
    //     if (removeProducts.length > 0) {
    //       return {
    //         ...state,
    //         cart: [...removeProducts],
    //       }
    //     }
    //   } else {
    //     return {
    //       ...state,
    //     }
    //   }
    // })

    default:
      return state
  }
}

export default cartReducer
