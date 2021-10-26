import styled from 'styled-components'
import { mobile } from './Responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex: 1;

   background-color: #fff7f7;
  height: 70vh;
  position: relative;
  
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '60vh' })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: #ffcc;
  margin-bottom: 20px;
  ${mobile({ padding: '0px', fontSize: '17px' })}
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  text-decoration: #f00 solid underline;
 
  &:hover {
    background-color: #88A096;
    color: white;
  }
  ${mobile({ padding: '0px', fontSize: '19px',backgroundColor: 'transparent',cursor: 'pointer'})}
`
type Props = {
  item: {
    id: number
    img: string
    title: string
  
  }
}

const CategoryItem = ({ item }: Props) => {
  return (
    <Container>
      <Image
        src={item.img}
        alt=""
      />
      <Info>
        <Title>{item.title}</Title>
        <Link to = {'/shop'}>
        <Button>SHOP NOW</Button>
        </Link>
      </Info>
    </Container>
  )
}

export default CategoryItem

