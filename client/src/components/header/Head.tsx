import React from 'react'
import styled from 'styled-components'
import { Carousel, DropdownButton, Dropdown } from 'react-bootstrap'
import { mobile } from '../pages/Responsive'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
`
const DropDownContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: space-between;
`

const Left = styled.div`
  align-items: center;
  height: 600px;
  ${mobile({ display: 'none' })}
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  width: 50%;
`
const RightContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`
const RightImage = styled.img`
  display: flex;

  width: 440px;
  height: 410px;
  flex-direction: row;
  ${mobile({ display: 'none' })}
`
const FirstRightImage = styled.img`
  display: flex;
  width: 440px;
  height: 410px;
  flex-direction: row;
  ${mobile({ width: '300px', height: '300px' })}
`
const Image = styled.img`
  width: 600px;
  z-index: 2;
`
const CarouselTextH2 = styled.h2`
  font-size: 65px;
  ${mobile({ fontSize: '30px' })}
`
const CarouselTextH3 = styled.h3`
  ${mobile({ fontSize: '20px' })}
`
const CarouselTextP = styled.p``

function Head() {
  return (
    <div>
      <DropDownContainers style={{ backgroundColor: '#8E443D' }}>
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

        {/* <Switch
          defaultChecked
          // value={theme}
       onChange={handleTheme}
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        /> */}
      </DropDownContainers>
      <Container>
        <Left>
          <Image src="https://i.ibb.co/cXFnLLV/3.png" />
          {/* <Image src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6b%2Faa%2F6baa4c9256f37b69e2e4d0edc185e1d83e3d518c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" />      */}
        </Left>
        <Right>
          <Carousel>
            <Carousel.Item>
              <CarouselTextH2>AUTUMN COLLECTION</CarouselTextH2>
              <CarouselTextH3>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </CarouselTextH3>
              <CarouselTextP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tenetur veniam atque minima a repellat eligendi, cum
                consequuntur ad tenetur
              </CarouselTextP>
            </Carousel.Item>

            <Carousel.Item>
              <CarouselTextH2>AUTUMN COLLECTION</CarouselTextH2>
              <CarouselTextH3>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </CarouselTextH3>
              <CarouselTextP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tenetur veniam atque minima a repellat eligendi, cum
                consequuntur ad tenetur
              </CarouselTextP>
            </Carousel.Item>

            <Carousel.Item>
              <CarouselTextH2>AUTUMN COLLECTION</CarouselTextH2>
              <CarouselTextH3>
                DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
              </CarouselTextH3>
              <CarouselTextP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                tenetur veniam atque minima a repellat eligendi, cum
                consequuntur ad tenetur
              </CarouselTextP>
            </Carousel.Item>
          </Carousel>
          <RightContent>
            <div>
              <FirstRightImage src="https://i.ibb.co/cXFnLLV/3.png" />
            </div>
            <div>
              <RightImage src="https://i.ibb.co/cXFnLLV/3.png" />
            </div>
          </RightContent>
        </Right>
      </Container>
    </div>
  )
}

export default Head
