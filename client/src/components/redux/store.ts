import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import cartReducer from './reducers/cart/cartReducer'
import productReducer from './reducers/products/productReducer'
import themeReducer from './reducers/themes/themeReducer'
import { RootState } from './types'


const rootReducers = combineReducers( {productReducer,cartReducer,themeReducer } )

const storeFactory = () => {
  const middleware = [thunk]

  const reduxStore = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  return reduxStore
}

export default  storeFactory
