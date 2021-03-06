import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../header/Announcement'
import Footer from '../footer/Footer'
import Navbar from '../header/Nav'
import { mobile } from '../pages/Responsive'
import { useHistory, Link } from 'react-router-dom'
import { RootState } from '../redux/types'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, removeCart } from '../redux/actions'
import { Badge } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const Container = styled.div`
  background-color: #fdf5fb;
`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props: any) => props.type === 'filled' && 'none'};
  background-color: ${(props: any) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props: any) => props.type === 'filled' && 'white'};
  ${mobile({ display: 'flex', align: 'center'})}
`

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props: any) => props.type === 'total' && '500'};
  font-size: ${(props: any) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: transparent;
    color: black;
  }
`

const Cart = () => {
  const dispatch = useDispatch()
  let history = useHistory()

  const isLogin = useSelector((state: RootState) => {
    return state.cartReducer.isLoggedIn
  })
  const cartProducts = useSelector((state: RootState) => {
    return state.cartReducer.cart
  })
  const favProducts = useSelector((state: RootState) => {
    return state.cartReducer.favourites
  })

  const handleCheckout = () => {
    !isLogin ? history.push('/signup') : history.push('/cart')
  }

  const remove = (productId: string) => {
    dispatch(removeCart(productId))
  }
  const handleClick = () => {
    dispatch(incrementCount())
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>YOUR CART</Title>
      <Top>
        <Link to={'/shop'}>
          <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
        <TopTexts>
          <Badge badgeContent={cartProducts.length} style={{ color: 'red' }}>
            <TopText>Shopping Bag</TopText>
          </Badge>
          <Badge badgeContent={favProducts.length} style={{ color: 'red' }}>
            <TopText>Your Wishlist</TopText>
          </Badge>
        </TopTexts>

        <TopButton>CHECKOUT NOW</TopButton>
      </Top>
      {cartProducts.map((products) => {
        return (
          <Wrapper>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src={products.image} />

                    {/* <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" /> */}
                    <Details>
                      <ProductName>
                        <b>Product:</b> {products.description}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {products._id}
                      </ProductId>
                      <ProductColor color="black" />
                      <ProductSize>
                        <b>Size:</b> 41
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>{cartProducts.length}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 45</ProductPrice>
                    <TopButton onClick={() => remove(products._id)}>
                      Remove
                    </TopButton>
                  </PriceDetail>
                </Product>
                <Hr />
              </Info>
            </Bottom>
          </Wrapper>
        )
      })}

      <Summary>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>$ 80</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Estimated Shipping</SummaryItemText>
          <SummaryItemPrice>$ 5.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice>$ -5.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>$ 80</SummaryItemPrice>
        </SummaryItem>
        {/* <Link to={'/checkout'}> */}
          {/* onClick = {isLogin? history.push('/signup'):history.push('/cart')} */}
          <Button onClick ={handleCheckout}>CHECKOUT NOW</Button>
        {/* </Link> */}
      </Summary>

      <Footer />
    </Container>
  )
}

export default Cart
