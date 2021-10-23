import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../../SliderItems'
import { categories } from '../../SliderItems'
import Product from './Product'
import axios from 'axios'
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
type Products ={
  image: string
  _id: string
  productName: string
  price: string
  description: string
}

const ProductsHome = () => {
  const [product, setProduct] = useState<any[]>([])


  const getAllProducts = async () => {
    const products = await axios.get<any[]>('/products')
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
