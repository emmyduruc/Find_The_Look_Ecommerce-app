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
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HooksProduct from '../hooks/HooksProduct'
import { ProductType } from '../redux/types'

const Home = () => {
  const dispatch = useDispatch()
  const [error, renderProducts] = HooksProduct()
  const [userInput, setUserInput] = useState('')
  const [searchResult, setSearchResult] = useState()

  useEffect(() => {
    // setSearchResult();
  }, [renderProducts]);

  // const onChangeHandler = (event:any) => {
  //   setUserInput(event.target.value);
  //   const foundData = renderProducts.filter(
  //     (product) => product.category[0].toLowerCase() === event.target.value.toLowerCase()
  //   );
  //   if (foundData.length === 0) {
  //     setSearchResult(renderProducts);
  //   }
 
  //    setSearchResult(foundData);
  // };

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
