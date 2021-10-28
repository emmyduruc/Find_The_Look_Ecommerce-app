import React from 'react'
import Announcement from '../header/Announcement'
import Nav from '../header/Nav'
import Slider from '../header/Slider'
import Category from '../pages/Category'
import NewArrivals from '../pages/NewArrivals'
import Products from '../pages/ProductList'
import Newsletter from '../pages/Newsletter'
import Footer from '../footer/Footer'
import ProductsHome from './ProductsHome'
import Partners from '../pages/Partners'



const Home = () => {
  return (
    <div>
      <Announcement />
      <Nav />
      <Slider />
      <Category />
      <ProductsHome />
      <NewArrivals />
      <ProductsHome />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
