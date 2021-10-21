import React from 'react'

import Header from '../header/Header'
import Banner from '../body/Banner'

// import CategoryItem from './CategoryItem'

import LoginPage from './Login'

import SignupPage from './SignupPage'
import CheckOut from './CheckOut'
import Cart from './Cart'

import ProductList from './ProductList'


function LandingPage() {
  return (
    <div>
      <ProductList />
      {/* <Header /> */}
      {/* <Banner /> */}

      <Cart />

      {/* <CategoryItem /> */}
      <SignupPage />

      {/* <LoginPage/>
                      
                     <CheckOut/> */}
    </div>
  )
}

export default LandingPage
