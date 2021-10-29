import React from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/types'
import { MdClose } from 'react-icons/md';
// const Container = styled.div`
// height: 60vh;
// `

// const Wrapper = styled.div`
//   padding: 20px;
//   ${mobile({ padding: '10px' })}
// `
// const Title = styled.h2`
//   font-weight: 300;
//   text-align: center;
// `
// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `
// const Image = styled.img`
//   width: 200px;
// `
// const ProductName = styled.span``

// const ProductId = styled.span``

// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `
// const Background = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   position: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 300px;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

type FavouriteDrawerType = {
  showFav: boolean
  setShowFav: any
}
const FavouriteDrawer = ({ showFav, setShowFav }: FavouriteDrawerType) => {
  const CartCounter = useSelector((state: RootState) => {
    return state.cartReducer.cart
  })

  return (
    <>
       {showFav ? (
            <ModalWrapper >
              <ModalImg src="https://images.unsplash.com/photo-1635458126666-591ea90ee730?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt='camera' />
              <ModalContent>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowFav((prev:any) => !prev)}
              />
            </ModalWrapper>
      ) : null}
    </>
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

// (
//   <Container>
//     {/* <div> */}
//       <Title>My Wishlist (0)</Title>
//     {/* </div> */}
//     <ProductDetail>
//       <Image src="" />
//       <Details>
//         <ProductName>
//           <b>Product:</b> Yeez Sneaker
//         </ProductName>
//         <ProductId>
//           <b>ID:</b> 6453313718293
//         </ProductId>
//       </Details>
//     </ProductDetail>
//     <button onClick={()=>setShowFav((prev:any) => !prev)}>close fav</button>
//   </Container>
// ) : null}