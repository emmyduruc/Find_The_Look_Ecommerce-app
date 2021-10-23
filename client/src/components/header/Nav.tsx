import React from 'react'
import { Link } from 'react-router-dom'

import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../pages/Responsive'

const Container = styled.div`
  height: 60px;
  background-color: #88a096;
  ${mobile({ height: '50px' })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  color: #fcf5f5;
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
          <MenuItem>THEME FAQ'S</MenuItem>
        </Left>
        <Link to={'/'}>
          <Center>
            <Logo>FEEDTHELOOK.</Logo>
          </Center>
        </Link>
        <Right>
          <Link to={'/contact'}>
            <MenuItem>NEED HELP?</MenuItem>
          </Link>
          <Link to={'/signUp'}>
            <MenuItem>SIGN UP</MenuItem>
          </Link>
          <Link to={'/login'}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Link to={'/cart'}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar

// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   //     flexGrow: 1,
//   //   backgroundColor: 'black',
//   // },
//   // menuButton: {
//   //   marginRight: theme.spacing(2),
//   //   fontSize: '3rem',
//   // },
//   root: {
//     flexGrow: 1,

//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   navRow: {
//     //     minHeight: '100%',
//     backgroundImage: `url("https://images.pexels.com/photos/7312286/pexels-photo-7312286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000")`,
//     height: '100vh',
//     backgroundRepeat: 'no-repeat',
//     display: 'flex',

//     justifyContent: 'space-between',
//     backgroundColor: '#D1AC00',
//   },
//   leftNav: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: 'red'
//     // margin: '1rem',
//     // width: '95%',
//     // minHeight: 160,
//   },
//   leftRightNav: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     margin: '1rem',
//     // width: '95%',
//     // minHeight: 160,
//   },
//   navIcons: {
//     marginRight: '1rem',
//     fontSize: '28px',
//     // width: '95%',
//     // minHeight: 160,
//   },
//   rightNav: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     margin: '1rem',
//     // width: '95%',
//     // minHeight: 160,
//   },
//   allRightNav: {

//     marginRight: '0.5rem',
//     width: '30%',

//   },

//   // dropdown : {
//   //   display: 'inline-block',
//   //   position: 'relative',
//   // },
//   // dropdown_content :{
//   //   display: 'none',
//   //   position: 'absolute',
//   //   width: '100%',
//   //   overFlow: 'auto',
//   //   boxShadow: '0px 10px 10px 0px rgba(0,0,0,0.4)',
//   //   '&:hover': {
//   //     background: "#f00",
//   //     display: 'block',
//   //  },
//   // },

//   // dropdown_content_anchor: {
//   //   display: 'block',
//   //   color: '#000000',
//   //   padding: '5px',
//   //   textDecoration: 'none',
//   //   '&:hover': {
//   //     color:' #FFFFFF',
//   //     backgroundColor: '#00A4BD',
//   //  },
//   // },
//   nav_2_Row: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     margin: '1rem',
//     width: '95%',
//     minHeight: 160,
//   },
//   rightAndLeftNav: {
//     display: 'flex',
//     alignItems: 'center',
//     transform: 'translate(-690%, 10%)',
//   },
//   // leftnav: {
//   //   display: 'flex',

//   //   justifyContent: 'space-between',
//   //   width: '30rem',

//   //   marginLeft: '1rem',
//   //   marginTop: '1rem',
//   // },
//   //   rightnav: {
//   //     display: 'flex',
//   //     justifyContent: 'space-between',
//   //     width: '15rem',
//   //     marginTop: '1.2rem',
//   //     left: '80%',
//   // //     marginRight: '1rem',
//   //   },
//   // logo: {
//   //   fontSize: '3rem',
//   //   alignItems: 'center',
//   // },
//   // shoppingcart: {
//   //   display: 'flex',
//   // },
//   // title_1: {
//   //   flexGrow: 1,
//   //   alignSelf: 'flex-end',
//   // },
//   label: {
//     alignItems: 'center',
//     borderRadius: '1rem',
//     paddingRight: '2rem',
//     paddingLeft: '2rem',
//     paddingTop: '0.5em',
//     paddingBottom: '0.5rem',
//     fontSize: '1rem',
//   },
// }))
// {
//   /* <Toolbar></Toolbar> */
// }
// function Nav() {
//   const classes = useStyles()
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar className={classes.leftNav}>
//           <div className={classes.leftNav}>
//           <div className={classes.leftNav}>
//             <Typography variant="h6" >
//               <PhoneIcon className={classes.navIcons} />
//             </Typography>
//             <Typography variant="h6" >
//               <span>+4915092820293</span>
//             </Typography>
//           </div>
//           <div className={classes.leftRightNav}>
//             <Typography variant="h6">
//               <EmailIcon className={classes.navIcons} />
//             </Typography>
//             <Typography variant="h6">
//               <span>emmanuelduru352@gmail.com</span>
//             </Typography>
//           </div>
//           </div>
//           <div className={classes.allRightNav}>
//           <div className={classes.rightNav}>
//             <Typography variant="h6">
//               Theme FAQ's
//             </Typography>
//             <Typography variant="h6">
//               Need Help?
//             </Typography>

//             <>
//               <DropdownButton
//                 id="dropdown-button-dark-example2"
//                 variant= "outline-secondary"
//                 menuVariant="dark"
//                 title="ENG"
//                 className="mt-2"
//               >
//                 <Dropdown.Item href="#/action-1" active>
//                   ENG
//                 </Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">GER</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">FRC</Dropdown.Item>
//               </DropdownButton>
//               <DropdownButton
//                 id="dropdown-button-dark-example2"
//                 variant="secondary"
//                 menuVariant="dark"
//                 title="USD"
//                 className="mt-2"
//               >
//                 <Dropdown.Item href="#/action-1" active>
//                   EUR
//                 </Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">BPB</Dropdown.Item>
//                 <Dropdown.Divider />
//                 <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
//               </DropdownButton>
//             </>
//           </div>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }
// export default Nav
