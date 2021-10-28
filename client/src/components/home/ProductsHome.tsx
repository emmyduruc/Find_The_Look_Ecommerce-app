import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { ProductType } from '../redux/types'
import { Dispatch } from 'redux'

import axios from 'axios'
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


const ProductsHome = () => {

  const [product, setProduct] = useState<ProductType[]>([])
  const getAllProducts = async () => {
    const products = await axios.get<ProductType[]>('/products')
    setProduct(products.data)
    console.log('products', products)
  }
  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
      <Container>
        {product.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </Container>
    </div>
  )
}

export default ProductsHome
