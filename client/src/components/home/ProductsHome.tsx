import React, { FC } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../../SliderItems'
import { categories } from '../../SliderItems'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
// type Props = {
//   id: number
//   img: string
// }
const ProductsHome = () => {
  return (
    <div>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  )
}

export default ProductsHome
