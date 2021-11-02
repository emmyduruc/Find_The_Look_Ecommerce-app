import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { ProductType } from '../redux/types'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import HooksProduct from '../hooks/useHooksProduct'
import { fetchProducts } from '../redux/actions'
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


const ProductsHome = () => {
  const [error, renderProducts] = HooksProduct()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // const [product, setProduct] = useState<ProductType[]>([])
  // const getAllProducts = async () => {
  //   const products = await axios.get<ProductType[]>('/products')
  //   setProduct(products.data)
  // }
  // useEffect(() => {
  //   getAllProducts()
  // }, [])

  return (
    <div>
      <Container>
        {renderProducts.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </Container>
    </div>
  )
}

export default ProductsHome
