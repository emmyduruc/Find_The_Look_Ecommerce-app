import styled from 'styled-components'
import { mobile } from './Responsive'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '20vh' })}
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
  color: white;
  margin-bottom: 20px;
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
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem

// { item }
// {item.title}
// {item.img}
