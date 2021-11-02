import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import styled from 'styled-components'
import { mobile } from '../pages/Responsive'
import { insertCart } from '../redux/actions'
import { RootState } from '../redux/types'
import { useState, useEffect } from 'react'
import FavouriteDrawer from '../pages/favouriteDrawer'

const Container = styled.div`
  height: 60px;
  background-color: #cb9173;
  ${mobile({ height: '50px', width: '100%' })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ marginLeft: '36px' })}
`

const Logo = styled.h1`
  color: #fcf5f5;
  font-weight: bold;
  ${mobile({ fontSize: '16px' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${mobile({ fontSize: '10px', marginLeft: '10px' })}
`
const NeedHelp = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  text-decoration: none;
  ${mobile({ display: 'none' })}
`
type Props = {
  onChange: any
  userInput: string
}

const Navbar = ({ onChange, userInput }: any) => {
  const [showFav, setShowFav] = useState(false)
  const [open, setOpen] = React.useState(false)

  const openFavDrawer = () => {
    setShowFav((prev) => !prev)
  }
  const CartCounter = useSelector((state: RootState) => {
    return state.cartReducer.cart
  })
  const favouriteCounter = useSelector((state: RootState) => {
    return state.cartReducer.favourites
  })

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" value={userInput} onChange={onChange} />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
          <Link to={'/contact'}>
            <NeedHelp>NEED HELP?</NeedHelp>
          </Link>
        </Left>
        <Link to={'/'}>
          <Center>
            <Logo>FEEDTHELOOK.</Logo>
          </Center>
        </Link>
        <Right>
          <Link to={'/signUp'}>
            <MenuItem>SIGN UP</MenuItem>
          </Link>

          <Link to={'/login'}>{<NeedHelp>SIGN IN</NeedHelp>}</Link>
          <MenuItem>
            <FavouriteDrawer open={open} setOpen={setOpen} />
            {/* <p>wishlist</p>
            <Badge
              badgeContent={favouriteCounter.length}
              style={{ color: 'white' }}
            >
              <FavoriteBorderIcon onClick={openFavDrawer} style={{ color: 'red' }} />
            </Badge> */}
          </MenuItem>
          <MenuItem>
            <p>cart</p>
            <Link to={'/cart'}>
              <Badge
                badgeContent={CartCounter.length}
                style={{ color: 'white' }}
              >
                <ShoppingCartOutlined style={{ color: 'red' }} />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
