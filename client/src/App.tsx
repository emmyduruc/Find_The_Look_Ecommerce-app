import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/header/Nav'
import Home from './components/home/Home'
import LoginPage from './components/Login/LoginPage'
import SignupPage from './components/pages/SignupPage'
import NeedHelp from './components/pages/NeedHelp'
import ShoppingStore from './components/pages/Shop'
import ProductList from './components/pages/ProductList'
import Cart from './components/pages/Cart'
import {useState} from 'react'
import CheckOut from './components/pages/CheckOut'
import { Shop } from '@material-ui/icons'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './components/redux/types'

function App() {
 const [darkMode, setDarkMode] = useState(false)
  // const theme = useSelector((state: RootState) => {
  //   return state.themeReducer.theme
  // })
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark': 'light',
    },
  })
  // const customLightTheme = createTheme({
  //   palette: {
  //     type: 'light',
  //   },
  // })
  return (
    <ThemeProvider
    theme={theme}
      // theme={theme === 'dark' ? customDarkTheme : customLightTheme}
    >
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/signUp">
              <SignupPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/contact">
              <NeedHelp />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <CheckOut />
            </Route>
            <Route exact path="/shop">
              <ShoppingStore />
            </Route>
            <Route exact path="/productPage/:productId">
              <ProductList />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
