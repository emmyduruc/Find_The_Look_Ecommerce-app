import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../header/Announcement'
import Footer from '../footer/Footer'
import Nav from '../header/Nav'
import Products from './ProductList'
import Newsletter from './Newsletter'
import { mobile } from './Responsive'
import ProductsHome from '../home/ProductsHome'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import useHooksProduct from '../hooks/useHooksProduct'
import { ProductType } from '../redux/types'

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 15px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`
const Option = styled.option``
type Props = {
  item: {
    id: number
    img: string
    title: string
  }
}
const Shop = () => {
  const [error, renderProducts] = useHooksProduct()

  const [userInput, setUserInput] = useState('')
  console.log('setInput', userInput)

  const [searchResult, setSearchResult] = useState<ProductType[]>([])

  useEffect(() => {
    setSearchResult(renderProducts)
  }, [renderProducts])

  const onChangeHandler = (event: any) => {
    setUserInput(event.target.value)
    const foundData = renderProducts?.filter((product) =>
      product.category.toLowerCase().includes(event.target.value.toLowerCase())
    )
    console.log('foundData', foundData)
    console.log('renderProducts', renderProducts)
    if (foundData.length === 0) {
      setSearchResult(renderProducts)
    }
    setSearchResult(foundData)
    console.log(foundData)
  }

  return (
    <Container>
      <Announcement />
      <Nav />
      <Title>Our Stock</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={(e) => console.log(e.target.value)}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <SearchContainer>
          <Input
            placeholder="Search"
            onChange={onChangeHandler}
            value={userInput}
          />
          <Search style={{ color: 'gray', fontSize: 16 }} />
        </SearchContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsHome searchResult = {searchResult} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Shop
