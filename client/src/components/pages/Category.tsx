import React, { FC } from 'react'

import { mobile } from './Responsive'
import styled from 'styled-components'
import { categories } from '../../SliderItems'
import CategoryItem from './CategoryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: '0px', flexDirection: 'column', justifyContent: 'space-between' })}
`


const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories

