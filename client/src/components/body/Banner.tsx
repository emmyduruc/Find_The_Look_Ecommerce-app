import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import headerImg from '../body/img/banner_2.jpg'
import colImg_1 from '../body/img/banner_1.jpg'
import colImg_2 from '../body/img/banner.jpg'
import colImg_3 from '../body/img/banner_2.jpg'
import { Button, Card } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  headerImg: {
   
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

function Banner() {
  const classes = useStyles()
  return (
    <div className={classes.headerImg}>
      <Card >
        <Card.Img variant="top" src={headerImg}  />
        <Card.Body>
          <Card.Title>AUTUMN WEARS</Card.Title>
          <Card.Text>
        
          </Card.Text>
          <Button variant="outline-info">TO SHOP</Button>
        </Card.Body>
      </Card>
      {/* <img className={classes.headerImg} src={headerImg}  /> */}
      <div >
      <Card >
        <Card.Img variant="top" src={headerImg}  />
        <Card.Body>
          <Card.Title>HOME WEARS</Card.Title>
          <Card.Text>
        
          </Card.Text>
          <Button variant="outline-info">TO SHOP</Button>
        </Card.Body>
      </Card>
      {/* <img className={classes.headerImg} src={headerImg}  /> */}
    </div>
    <div >
      <Card >
        <Card.Img variant="top" src={headerImg}  />
        <Card.Body>
          <Card.Title>DRESSES</Card.Title>
          <Card.Text>
        
          </Card.Text>
          <Button variant="outline-info">TO SHOP</Button>
        </Card.Body>
      </Card>
      {/* <img className={classes.headerImg} src={headerImg}  /> */}
    </div>
    <div >
      <Card >
        <Card.Img variant="top" src={headerImg}  />
        <Card.Body>
          <Card.Title>TOPS</Card.Title>
          <Card.Text>
        
          </Card.Text>
          <Button variant="outline-info">TO SHOP</Button>
        </Card.Body>
      </Card>
      {/* <img className={classes.headerImg} src={headerImg}  /> */}
    </div>
    </div>
    
  )
}

export default Banner

{
  /* <Container>
<Row>
  <Col><img className={classes.headerImg} src={headerImg}/>  </Col>
  <Col><img className={classes.headerImg} src={colImg_1}/> </Col>
</Row>
<Row>
  <Col><img className={classes.headerImg} src={colImg_1}/></Col>
  <Col><img className={classes.headerImg} src={colImg_1}/></Col>
  <Col><img className={classes.headerImg} src={colImg_1}/></Col>
</Row>
</Container> */
}
