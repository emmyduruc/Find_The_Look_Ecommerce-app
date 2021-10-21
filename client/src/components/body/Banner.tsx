import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import headerImg from '../body/img/banner_2.jpg'
import colImg_1 from '../body/img/banner_1.jpg'
import colImg_2 from '../body/img/banner.jpg'
import colImg_3 from '../body/img/banner_2.jpg'
import { Button, Card } from 'react-bootstrap'
import Paper from '@material-ui/core/Paper'
import { Grid, Typography, ButtonBase } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    // root: {
    //   // flexGrow: 1,
    //   // display: 'flex',
    //   width: '100%',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    // },
    // paper: {
    //   padding: theme.spacing(2),
    //   textAlign: 'center',
    //   color: theme.palette.text.secondary,
    //   margin: 'auto',
    //   // maxWidth: 600,
    // },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    image: {
      width: '80vh',
      height: '50vh',
      marginLeft: '3rem',
      marginTop: '2rem',
      alignContent: 'center',
    },
    img: {
      marginTop: 'auto',
      display: 'block',
      padding: '0.5rem',
      // maxWidth: '100%',
      // maxHeight: '100%',
    },
    imgRight: {
      marginTop: 'auto',
      display: 'block',
      padding: '0.5rem',
      maxWidth: '100%',
      // maxHeight: '100%',
    },
    left: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center',
      // backgroundColor: 'yellow',
      justifyContent: 'space-evenly',
      marginBottom: '1rem',
    },
    right: {
      margin: 'auto',
      width: '50%',
      maxHeight: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    rightContent: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      alignItems: 'center',
    },
    container: {
      width: '70%',
      margin: '3rem',
    },
    wrapper: {
      width: '70%',
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: '500px 500px 780px',
      backgroundColor: '#fff',
      color: '#444',
    },
    box_a: {
      gridColumn: '1/3',
      gridRow: '1',
      // background: 'red',
      // height: '100%',
    },
    box_b: {
      gridColumn: ' 3',
      gridRow: '1 / 3',
      // background: 'blue',
    },
    box_c: {
      gridColumn: '1/3 ',
      gridRow: '1',
      background: 'orange',
    },
    box_d: {
      gridColumn: '2',
      gridRow: '2',
      background: 'green',
    },
    box_e: {
      gridColumn: '3',
      gridRow: '3',
      background: 'red',
    },
    typography: {
      fontSize: '2rem',
    },
    paragraphs: {
      fontSize: '1rem',
    },
    shopNow: {
      textDecoration: '#f00 solid underline',
      fontStyle: 'bold',
      fontWeight: 900,
      fontSize: '1rem',
      // border: '0.5rem solid black',
      borderRadius: '2rem',
    },
    span: {
      fontSize: '1rem',
      fontStyle: 'bold',
      fontWeight: 900,
      padding: '1rem',
    },
    specialOffer: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      alignItems: 'center',
      backgroundColor: 'yellow',
      justifyContent: 'space-between',
      marginBottom: '1rem',
    },
    wrapper_2: {
      width: '100%',
      display: 'grid',
      gridGap: '10px',
      gridTemplateColumns: 'minmax(600px, 1fr) 700px 700px',
      backgroundColor: 'yellow',
      color: '#444',
    },
  })
)

function Banner() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Grid className={classes.box_a}>
          <div className={classes.left}>
            <div>
              <span className={classes.span}>JACKETS</span>
              <Typography className={classes.typography}>
                Comfortable original
              </Typography>
              <Typography className={classes.typography}>
                Silk Jackets
              </Typography>
              <p className={classes.paragraphs}>
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
              <ButtonBase className={classes.shopNow}>Shop now</ButtonBase>
            </div>
            <div>
              <img
                className={classes.img}
                src="https://robbreport.com/wp-content/uploads/2020/09/comp-1.jpg?w=500"
                alt=""
              />
            </div>
          </div>

          <div className={classes.left}>
            <div>
              <img
                className={classes.img}
                width="500"
                src="https://www.telegraph.co.uk/multimedia/archive/03416/bestrunningtopsfor_3416180k.jpg"
                alt=""
              />
            </div>
            <div>
              <span className={classes.span}>JACKETS</span>
              <Typography className={classes.typography}>
                Comfortable original
              </Typography>
              <Typography className={classes.typography}>
                Silk Jackets
              </Typography>
              <p className={classes.paragraphs}>
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
              <ButtonBase className={classes.shopNow}>Shop now</ButtonBase>
            </div>
          </div>
        </Grid>
        <div>
          <Grid className={classes.box_b}>
            <div>
              <div>
                <img
                  className={classes.imgRight}
                  src="https://media.rackroomshoes.com/img/events/2021/fall/homepage/20210915-hero-block-m.jpg"
                  alt=""
                />
              </div>
              <div className={classes.rightContent}>
                <span className={classes.span}>ALL SHOES</span>
                <Typography className={classes.typography}>
                  Comfortable original
                </Typography>
                <Typography className={classes.typography}>
                  Cotton Sneaker
                </Typography>
                <p className={classes.paragraphs}>
                  the 1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum
                </p>
                <ButtonBase className={classes.shopNow}>Shop now</ButtonBase>
              </div>
            </div>
          </Grid>
        </div>
        {/* <div className={classes.box_c}>C</div>
        <div className={classes.box_d}>D</div>
        <div className={classes.box_e}>D</div> */}
      </div>
      {/* <div className={classes.wrapper_2}>
        
        <div>D</div>
        <div>D</div>
        <div>A</div>
      </div> */}
    </div>
  )
}

export default Banner
// <div className={classes.root}>
//   <div className={classes.left}>
//     <div>
//       <div>
//         <img
//           className={classes.image}
//           alt="complex"
//           src="https://media.rackroomshoes.com/img/events/2021/fall/homepage/20210915-cb-nike.jpg"
//         />

//       </div>
//       <div>
//       <span>Special offer</span>
//         <h2>Comfortable original</h2>
//         <h2>Cotton Sneaker</h2>
//         <h3>loremdkapjajdiasdjaiojaoidajaicjajsddiacjodcijsaoicjsad</h3>
//         <ButtonBase>Shop now</ButtonBase>
//       </div>
//     </div>
//     </div>
//     <div className={classes.right}>
//     <Grid item xs={12} >
//       <Paper className={classes.paper}>xs=6</Paper>
//     </Grid>
//     </div>

// </div>

{
  /* <div className={classes.headerImg}>
      <Card >
        <Card.Img variant="top" src={headerImg}  />
        <Card.Body>
          <Card.Title>AUTUMN WEARS</Card.Title>
          <Card.Text>
        
          </Card.Text>
          <Button variant="outline-info">TO SHOP</Button>
        </Card.Body>
      </Card>
      {/* <img className={classes.headerImg} src={headerImg}  /> */
}
{
  /* //   <div >
//   <Card >
//     <Card.Img variant="top" src={headerImg}  />
//     <Card.Body>
//       <Card.Title>HOME WEARS</Card.Title>
//       <Card.Text>

//       </Card.Text>
//       <Button variant="outline-info">TO SHOP</Button>
//     </Card.Body>
//   </Card>
//   {/* <img className={classes.headerImg} src={headerImg}  /> */
}
//</div>
// <div >
//   <Card >
//     <Card.Img variant="top" src={headerImg}  />
//     <Card.Body>
//       <Card.Title>DRESSES</Card.Title>
//       <Card.Text>

//       </Card.Text>
//       <Button variant="outline-info">TO SHOP</Button>
//     </Card.Body>
//   </Card>
//   {/* <img className={classes.headerImg} src={headerImg}  /> */}
// </div>
// <div >
//   <Card >
//     <Card.Img variant="top" src={headerImg}  />
//     <Card.Body>
//       <Card.Title>TOPS</Card.Title>
//       <Card.Text>

//       </Card.Text>
//       <Button variant="outline-info">Go somewhere</Button>
//     </Card.Body>
//   </Card>
//   {/* <img className={classes.headerImg} src={headerImg}  /> */}
// </div>
// </div> */}
