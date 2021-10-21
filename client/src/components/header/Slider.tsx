import React from 'react'
import Switch from '@material-ui/core/Switch'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { SliderItems } from '../../SliderItems'
import { mobile } from '../pages/Responsive'
import { Carousel, DropdownButton, Dropdown } from 'react-bootstrap'

const CarouselContainer = styled.div`
  width: 100%;
  height: 700px;
  background-color: #fff7f7;
  display: flex;

  align-items: center;
  position: relative;
  justify-content: center;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`
const CarouselImage = styled.img`
  height: 500px;
`
const CarouselTitleContainer = styled.div`
  width: 50%;
`
const CarouselTextH2 = styled.h2`
  font-size: 65px;
`
const CarouselTextH3 = styled.h3``
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
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`
type ArrowProps = {
  direction: string
}
const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;

  ${({ direction }) =>
    direction === 'right' ? `right : 10px;` : `left: 10px;`}

  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
type WrapperProps = {
  slideIndex: number
}
const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  ${({ slideIndex }) =>
    slideIndex &&
    `transform: translateX(${(slideIndex: number) => slideIndex * -100}vw)`}
`
// transform: translateX(${(slideIndex:number) => slideIndex * -100}vw);
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: red;
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #07beb8;
    color: white;
  }
`

// const props = { direction, slideIndex }

const Slider = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

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
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </DropDownContainers>
    </div>
  )
}

export default Slider
