import React from 'react'
import Announcement from '../header/Announcement'
import Footer from '../footer/Footer'
import Navbar from '../header/Nav'
import Newsletter from './Newsletter'
import Bootstrap from 'react-bootstrap'
import { Form, DropdownButton, Dropdown } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '3rem',
  },
}))
const NeedHelp = () => {
  const classes = useStyles()
  return (
    <div>
      <Announcement />
      <Navbar />
      <Form className={classes.container}>
        <Form.Group
          style={{ width: '800px' }}
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          style={{ width: '800px' }}
          controlId="exampleForm.ControlSelect1"
        >
          <Form.Label>Reason select</Form.Label>
          <Form.Control as="select">
            <option></option>
            <option>Returning Order</option>
            <option>Payment Refund</option>
            <option>Order Missing</option>
            <option>Delay Delivery</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          style={{ width: '800px' }}
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Your message here</Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>
        <button style={{ width: '800px', textAlign: 'left' }}>Send your message</button>
      </Form>

      <Newsletter />
      <Footer />
    </div>
  )
}

export default NeedHelp
