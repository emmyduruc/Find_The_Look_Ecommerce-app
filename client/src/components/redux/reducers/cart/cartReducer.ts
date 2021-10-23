 import {AllActions} from '../../actions'

const initState = {
  cart: [],
}

 const cartReducer = (state = initState, action: AllActions) => {
  const incomingProducts = action.payload
  switch (action.type) {
    case 'INSERT_PRODUCTS':
      return {
        ...state,
         cart: [...state.cart, incomingProducts],
      }
      // case 'REMOVE_PRODUCTS': 
  }
}

export default cartReducer
