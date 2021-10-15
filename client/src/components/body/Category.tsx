import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
       headerImg: {
        marginTop:"4rem",
         display: 'flex',
         justifyContent: 'space-between',
         
       },
       container:{
              height: '100vh',
              // backgroundColor: '#65d6da'
       },
       card:{
              marginRight:'1rem'
       },
       h2:{
              textAlign: 'center',
              textShadow: '1',
              marginTop:"4rem",

       }
     }))

function Category() {
       const classes = useStyles()
  return (
    <div className={classes.container}>
           <h2 className={classes.h2}>SHOP BY CATEGORY</h2>
           <div className={classes.headerImg}>
      <Card className={classes.card}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">BEAUTY</small>
        </Card.Footer>
      </Card>
      <Card className={classes.card}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">BEAUTY</small>
        </Card.Footer>
      </Card>
      <Card className={classes.card}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">BEAUTY</small>
        </Card.Footer>
      </Card>
      <Card className={classes.card}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">BEAUTY</small>
        </Card.Footer>
      </Card>
      <Card className={classes.card}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">BEAUTY</small>
        </Card.Footer>
      </Card>
      <Card className={classes.card}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3387577/pexels-photo-3387577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">BEAUTY</small>
        </Card.Footer>
      </Card>
      </div>
    </div>
  )
}

export default Category
