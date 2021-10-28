import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import { FaFedex } from 'react-icons/fa'
import { SiDhl } from 'react-icons/si'
import { SiDpd } from 'react-icons/si'
import { FaDhl } from 'react-icons/fa'
import { SiUps } from 'react-icons/si'
import { GrDeliver } from 'react-icons/gr'

import styled from 'styled-components'
import { mobile } from '../pages/Responsive'

const Container = styled.div`
  display: flex;
  background-color: #fff7f7;
  ${mobile({ flexDirection: 'column' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Delivery = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`
const Logo = styled.h3``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 40px;

  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 20px;
  ${mobile({ display: 'none' })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Delivery>
          <GrDeliver style={{ fontSize: '35px' }} />
          <Logo>Delivery Service</Logo>
        </Delivery>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon style={{ color: 'red' }} color="FFFF">
            <FaFedex />
          </SocialIcon>
          <SocialIcon style={{ color: 'red' }} color="FFFF00">
            <SiDhl />
          </SocialIcon>
          <SocialIcon style={{ color: 'red' }} color="FFFF00">
            <FaDhl />
          </SocialIcon>
          <SocialIcon style={{ color: 'red' }} color="ffff">
            <SiDpd />
          </SocialIcon>
          <SocialIcon color="FFFF00">
            <SiUps />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Delivery>
       
          <Title>Access Links</Title>
        </Delivery>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          
        </List>
      </Center>
      <Right>
        <Delivery>
          <Title>Payment Gateways</Title>
        </Delivery>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima,
          qui sint fugit ut sequi incidunt. Nihil possimus ab nam officia ipsa
          qui sint fugit ut sequi incidunt. Nihil possimus ab nam officia ipsa
          commodi cupiditate dolor, quibusdam soluta voluptas cumque ipsam!
        </p>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
      <Right>
        <Delivery style={{ alignItems: 'center' }}>
          <Title>Contact</Title>
        </Delivery>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> 32 stephenplaz hamburg,
          Germany
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +49-234-56-78-483
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> emmanuelduru@gmail.com
        </ContactItem>
        <SocialContainer>
          <SocialIcon style={{ color: 'white' }} color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon style={{ color: 'white' }} color="9c2a2a">
            <Instagram />
          </SocialIcon>
          <SocialIcon style={{ color: 'white' }} color="55eaa2">
            <WhatsAppIcon />
          </SocialIcon>
          <SocialIcon style={{ color: 'white' }} color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon style={{ color: 'white' }} color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  )
}

export default Footer

