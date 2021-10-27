import React from 'react'
import Switch from '@material-ui/core/Switch'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { SliderItems } from '../../SliderItems'
import { mobile } from '../pages/Responsive'
import { lightTheme, darkTheme, insertCart } from '../redux/actions'

import { Carousel, DropdownButton, Dropdown } from 'react-bootstrap'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
  Badge,
} from '@material-ui/core'
import { ProductType, RootState } from '../redux/types'

const useStyles = makeStyles((theme) => ({
  cover: {
    backgroundColor: '#42684f',
    marginTop: '0em',
  },

  formControl: {
    minWidth: 100,
    marginLeft: '100px',
  },
  inputlabel: {
    color: '#dad423',
  },
  label: {
    alignItems: 'center',
    borderRadius: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    paddingTop: '1em',
    paddingBottom: '1rem',
    fontSize: '1rem',
  },
  themeChanger: {
    background: 'dark' ? 'black' : 'white',
  },
}))

const CarouselContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #fff7f7;
  display: flex;

  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;
  ${mobile({
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  })}
`
const CarouselImage = styled.img`
  height: 500px;
  ${mobile({ height: '300px' })}
`
const CarouselTitleContainer = styled.div`
  width: 50%;
`
const CarouselTextH2 = styled.h2`
  font-size: 65px;
  ${mobile({ fontSize: '30px' })}
`
const CarouselTextH3 = styled.h3`
  ${mobile({ fontSize: '20px' })}
`
const CarouselTextP = styled.p``
const DropDownContainers = styled.div`
  display: flex;

  align-items: center;
  position: relative;
  justify-content: space-between;
`
const CarouselButton = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  text-decoration: #f00 solid underline;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #88a096;
    color: white;
  }
`

// const props = { direction, slideIndex }

const Slider = () => {
  const classes = useStyles()
  // const dispatch = useDispatch()
  // const [darkMode, setDarkMode] = useState(false)
  // // setTheme(theme)

  // //
  // const theme = useSelector((state: RootState) => {
  //   return state.themeReducer.theme
  // })

  // const dark = () => {
  //   dispatch(darkTheme())
  // }

  // const light = () => {
  //   dispatch(lightTheme())
  // }

  return (
    <div>
      <Carousel style={{ height: '700px' }}>
        <Carousel.Item>
          <CarouselContainer>
            <CarouselImage src="https://i.ibb.co/cXFnLLV/3.png" />
            <CarouselTitleContainer>
              <CarouselTextH2>AUTUMN COLLECTION</CarouselTextH2>
              <CarouselTextH3>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </CarouselTextH3>
              <CarouselTextP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tenetur veniam atque minima a repellat eligendi, cum
                consequuntur ad tenetur
              </CarouselTextP>
              <CarouselButton>TO SHOP</CarouselButton>
            </CarouselTitleContainer>
          </CarouselContainer>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselContainer>
            <CarouselImage src="https://i.ibb.co/DG69bQ4/2.png" />
            <CarouselTitleContainer>
              <CarouselTextH2>AUTUMN COLLECTION</CarouselTextH2>
              <CarouselTextH3>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </CarouselTextH3>
              <CarouselTextP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tenetur veniam atque minima a repellat eligendi, cum
                consequuntur ad tenetur
              </CarouselTextP>
              <CarouselButton>TO SHOP</CarouselButton>
            </CarouselTitleContainer>
          </CarouselContainer>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselContainer>
            <CarouselImage src="https://i.ibb.co/cXFnLLV/3.png" />
            <CarouselTitleContainer>
              <CarouselTextH2>AUTUMN COLLECTION</CarouselTextH2>
              <CarouselTextH3>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </CarouselTextH3>
              <CarouselTextP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tenetur veniam atque minima a repellat eligendi, cum
                consequuntur ad tenetur
              </CarouselTextP>
              <CarouselButton>TO SHOP</CarouselButton>
            </CarouselTitleContainer>
          </CarouselContainer>
        </Carousel.Item>
      </Carousel>
      <DropDownContainers style={{ backgroundColor: '#88a096' }}>
        <DropdownButton
          variant="success"
          title="CATEGORIES"
          id="dropdown-menu-align-right"
        >
          <Dropdown.Item eventKey="1">Shoes/Sneakers</Dropdown.Item>
          <Dropdown.Item eventKey="2">Jackets</Dropdown.Item>
          <Dropdown.Item eventKey="3">Top</Dropdown.Item>
          <Dropdown.Item eventKey="4">Belts</Dropdown.Item>
        </DropdownButton>

        <Switch
          // defaultChecked={darkMode}
          // // value={theme}
          // onChange={() => setDarkMode(!dark)}
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
      </DropDownContainers>
    </div>
  )
}

export default Slider
