import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons'
import VisibilityIcon from '@material-ui/icons/Visibility'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { insertCart, InsertFavourite } from '../redux/actions'
import { ProductType } from '../redux/types'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdf5fb;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`
type ProductProps = { item: ProductType }

const Product = ({ item }: ProductProps) => {
  const dispatch = useDispatch()
  const products = item
  const handleInsertFav = () => dispatch(InsertFavourite(products._id))
  const insert = () => dispatch(insertCart(products))
  return (
    <Container>
      <Circle />
      <Image src={item.image} key={item._id} />

      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={insert} />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined
            onClick={handleInsertFav}
            style={{ color: 'red' }}
          />
        </Icon>
        <Link to={`/productPage/${item._id}`}>
          <Icon>
            <VisibilityIcon />
          </Icon>
        </Link>
      </Info>
    </Container>
  )
}

export default Product
