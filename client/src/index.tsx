import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
import storeFactory from './components/redux/store'
import { Provider } from 'react-redux'

const reduxStore = storeFactory()

axios.defaults.baseURL = 'http://localhost:5000/api/v1'

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token') as string
  console.log('token....', token)
  const requestHeader = {
    Authorization: `Bearer ${token}`,
  }
  request.headers = requestHeader

  return request
})

ReactDOM.render(
   <Provider store={reduxStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
