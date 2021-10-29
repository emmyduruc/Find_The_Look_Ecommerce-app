import React, {useState, useEffect } from 'react'
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons'
import styled from 'styled-components'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/actions'
import { ProductType } from '../redux/types'

import axios from 'axios'
import { mobile } from './Responsive'

// products
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
  justify-content: space-around;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: 'fff';
  color: black;
  display: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: red;
    color: white;
  }
`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  height: 75%;
  z-index: 2;
`
const Deals = styled.div`
display: flex;
 flex-direction: column,
 align-items: center;
 &:hover ${Button}{
  display: flex;
  align-items: center;
}
${mobile({ display: 'none' })};
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const NewArrivals = () => {

  return (
    <div>
      <Header>
        <FlashOnIcon style={{ fontSize: '40px', color: 'red' }} />
        <h2>FLASH DEALS</h2>
      </Header>

      <Container>
        <Circle />
        <Image
          src="https://images.unsplash.com/photo-1611042553365-9b101441c135?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="item.img"
        />
        <Info>
        <Deals >
        <Image style={{width: '200px', height: ''}}
          src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="item.img"
        />
        <Button>To Shop</Button>
        </Deals>
       <Deals>
        <Image style={{width: '200px', height: ''}}
          src="https://i.etsystatic.com/19534392/r/il/82cb9c/3410304298/il_794xN.3410304298_gqzs.jpg"
          alt="item.img"
        />
        <Button>To Shop</Button>
        </Deals>
           <Image
          src="https://images.unsplash.com/photo-1611042553365-9b101441c135?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="item.img"
        />
          <Deals>
        <Image style={{width: '200px', height: ''}}
          src="https://i.etsystatic.com/18385470/r/il/0c9827/3082589943/il_794xN.3082589943_g978.jpg"
          alt="item.img"
        />
        <Button>To Shop</Button>
        </Deals>
        <Deals >
        <Image style={{width: '200px', height: ''}}
          src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt="item.img"
        />
        <Button>To Shop</Button>
        </Deals>
          {/* <Icon>
            <ShoppingCartOutlined />
          </Icon>
         
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon> */}
        </Info>
      </Container>
    </div>
  )
}

export default NewArrivals

// {item.img}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },

//   row: {
//     // height: '100vh',
//     display: 'flex',

//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   h2: {
//     textAlign: 'center',
//     margin: '4rem',
//   },
// }))
//
//   const classes = useStyles()
//   return (
//     <div>
//       <h2 className={classes.h2}>NEW ARRIVALS</h2>
//       <div className={classes.row}>
//         <Card className={classes.root}>
//           <CardActionArea>
//             <CardMedia
//               component="img"
//               alt="Contemplative Reptile"
//               height="140"
//               image="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2020_17/3318911/200422-eco-shoes-2x1-al-1218.jpg"
//               title="Contemplative Reptile"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 Caps
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 Lizards are a widespread group of squamate reptiles, with over
//                 6,000 species, ranging across all continents except Antarctica
//               </Typography>
//             </CardContent>
//           </CardActionArea>
//           <CardActions>
//             <Button size="small" color="primary">
//               To Shop
//             </Button>
//             <Button size="small" color="primary">
//               Category
//             </Button>
//           </CardActions>
//         </Card>
//         <div>
//           <Card className={classes.root}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 alt="Contemplative Reptile"
//                 height="140"
//                 image="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2020_17/3318911/200422-eco-shoes-2x1-al-1218.jpg"
//                 title="Contemplative Reptile"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Tops
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 To Shop
//               </Button>
//               <Button size="small" color="primary">
//                 Category
//               </Button>
//             </CardActions>
//           </Card>
//         </div>
//         <div>
//           <Card className={classes.root}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 alt="Contemplative Reptile"
//                 height="140"
//                 image="https://www.helikon-tex.com/media/catalog/product/cache/4/image/500x/17f82f742ffe127f42dca9de82fb58b1/b/l/bl-caf-fl-02.jpeg"
//                 title="Contemplative Reptile"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Belts
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 To Shop
//               </Button>
//               <Button size="small" color="primary">
//                 Category
//               </Button>
//             </CardActions>
//           </Card>
//         </div>
//         <div>
//           <Card className={classes.root}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 alt="Contemplative Reptile"
//                 height="140"
//                 image="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2020_17/3318911/200422-eco-shoes-2x1-al-1218.jpg"
//                 title="Contemplative Reptile"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Shoes
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 To Shop
//               </Button>
//               <Button size="small" color="primary">
//                 Category
//               </Button>
//             </CardActions>
//           </Card>
//         </div>
//         <div>
//           <Card className={classes.root}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 alt="Contemplative Reptile"
//                 height="140"
//                 image="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/newscms/2020_17/3318911/200422-eco-shoes-2x1-al-1218.jpg"
//                 title="Contemplative Reptile"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Sneakers
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   Lizards are a widespread group of squamate reptiles, with over
//                   6,000 species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button size="small" color="primary">
//                 To Shop
//               </Button>
//               <Button size="small" color="primary">
//                 Category
//               </Button>
//             </CardActions>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NewArrivals

{
  /* <div > */
}
{
  /* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://castyou-website.sgp1.digitaloceanspaces.com/2019/10/Girijesh.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */
}
{
  /* </div> */
}
{
  /* <div>
           
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7qERayhyQQlTJRx182KZU2fvNWZaYlBgXQ4nlHEav7YKkTlvSXMWn0fEFf8maZ67GFw&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
      <div>
             
      <Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/nEX0ifyMK6_2-cSZiYFDQjSKA5Xitek-DO-shgRzKr5UM5nFuuhHAiF4IfGnYtjwJKNaWfY6Xee5IraJSLDHU9IQnnPX6L6V5SoX8INsHgJ9cCeTmvqzF6WIqFeD" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      </div>
      </div> */
}
