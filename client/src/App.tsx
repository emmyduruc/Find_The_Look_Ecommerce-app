import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/header/Nav'
import Home from './components/home/Home'
import LoginPage from './components/Login/LoginPage'
import SignupPage from './components/pages/SignupPage'
import Cart from './components/pages/Cart'


function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signUp">
        <SignupPage/>
        </Route >
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        
      </Switch>
      </Router>
      {/* <LoginPage/> */}
    </div>
  )
}

export default App
