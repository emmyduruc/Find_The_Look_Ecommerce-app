import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/types'

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`
const Title = styled.h2`
  font-weight: 300;
  text-align: center;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const ProductName = styled.span``

const ProductId = styled.span``

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const FavouriteDrawer = () => {
  const CartCounter = useSelector((state: RootState) => {
    return state.cartReducer.cart
  })

  return (
    <Container>
      <div>
        <Title>My Wishlist (0)</Title>
      </div>
      <ProductDetail>
        <Image src="" />
        <Details>
          <ProductName>
            <b>Product:</b> Yeez Sneaker
          </ProductName>
          <ProductId>
            <b>ID:</b> 6453313718293
          </ProductId>
        </Details>
      </ProductDetail>
    </Container>
  )
}

export default FavouriteDrawer

// const favouriteDrawer = () => {
//   const favouriteCounter = useSelector((state: RootState) => {
//     return state.cartReducer.favourites
//   })
//   return (
//     <Container>
//       <div>
//         <Title>My Wishlist (0)</Title>
//       </div>
//       <ProductDetail>
//         <Image src = "" />
//         <Details>
//           <ProductName>
//             <b>Product:</b> Yeez Sneaker
//           </ProductName>
//           <ProductId>
//             <b>ID:</b> 6453313718293
//           </ProductId>

//         </Details>
//       </ProductDetail>
//     </Container>
//   )
// }

// export default favouriteDrawer
