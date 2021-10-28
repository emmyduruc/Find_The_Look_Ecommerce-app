import React from 'react'
import { AiFillAmazonSquare } from 'react-icons/ai'
import { SiNike } from 'react-icons/si'
import { SiZalando } from 'react-icons/si'
import { SiPuma } from 'react-icons/si'
import { SiAdidas } from 'react-icons/si'
import styled from 'styled-components'
import { mobile } from '../pages/Responsive'

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
height: 150px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #f5fbfd;
position: relative;
&:hover ${Info} {
  opacity: 1;
}

`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
function Partners() {
  return (
    <Container>
      <SocialIcon>
        <AiFillAmazonSquare  style={{ fontSize: '60px' }}  />
      </SocialIcon>
      <SocialIcon>
        <SiNike />
      </SocialIcon>
      <SocialIcon>
        <SiZalando color="FFA500"/>
      </SocialIcon>
      <SocialIcon>
        <SiPuma />
      </SocialIcon>
      <SocialIcon>
        <SiAdidas />
      </SocialIcon>
      <Info>
        <h3>Our Partners</h3>
      </Info>
    </Container>
  )
}

export default Partners
