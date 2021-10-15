import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import TextField from '@material-ui/core/TextField'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { DropdownButton, Button, Dropdown } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    //     flexGrow: 1,
    backgroundColor: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '3rem',
  },
  navRow: {
//     minHeight: '100%',
    backgroundImage: `url("https://images.pexels.com/photos/7312286/pexels-photo-7312286.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000")`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    
    justifyContent: 'space-between',
    backgroundColor: '#D1AC00',
  },
  nav_2_Row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem',
    width: '95%',
    minHeight: 160,
  },
  rightAndLeftNav: {
    display: 'flex',
    alignItems: 'center',
    transform: 'translate(-690%, 10%)',
  },
  leftnav: {
    display: 'flex',

    justifyContent: 'space-between',
    width: '30rem',

    marginLeft: '1rem',
    marginTop: '1rem',
  },
  rightnav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '15rem',
    marginTop: '1.2rem',
    left: '80%',
//     marginRight: '1rem',
  },
  logo: {
    fontSize: '3rem',
    alignItems: 'center',
  },
  shoppingcart: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  label: {
    alignItems: 'center',
    borderRadius: '1rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    paddingTop: '0.5em',
    paddingBottom: '0.5rem',
    fontSize: '1rem',
  },
}))

function Nav() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <div className={classes.navRow}>
          <div className={classes.leftnav}>
            <MenuIcon className={classes.menuButton} />
            <form>
              <TextField
                id="outlined-basic"
                label="SEARCH..."
                variant="outlined"
              />
            </form>
          </div>
          <div>
            <div className={classes.logo}>FEEDLOOKS-CLOTHINGS</div>
          </div>

          <div className={classes.rightnav}>
            <PersonIcon />
            <FavoriteBorderIcon />
            <div className={classes.shoppingcart}>
              {' '}
              <ShoppingCartIcon />
              <span>count(0)</span>
            </div>
          </div>
          <div className={classes.rightAndLeftNav}>
            <Button variant="outline-info">GO TO SHOP</Button>
          </div>
        </div>
      </AppBar>
      <div className={classes.nav_2_Row}>
        <div>
          <DropdownButton id="dropdown-item-button" variant="outline-info" title="Categories">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton id="dropdown-item-button" variant="outline-info" title="Shoes">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton id="dropdown-item-button" variant="outline-info" title="Belts">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton id="dropdown-item-button" variant="outline-info" title="Beauty">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton id="dropdown-item-button" variant="outline-info"  title="Men">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item  as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton id="dropdown-item-button" variant="outline-info" title="Ladies">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <Button variant="outline-info">About</Button>{' '}
        </div>
        <div>
          {' '}
          <Button variant="outline-info">Sales</Button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Nav
{
  /* <div>
<Toolbar className={classes.toolbar}>
  <IconButton
    edge="start"
    className={classes.menuButton}
    color="inherit"
    aria-label="open drawer"
  >
    <MenuIcon />
  </IconButton>
  <div></div>
</Toolbar>
</div> */
}

//        <Navbar bg="light" expand={false}>
//        <Container fluid>
//          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//          <Navbar.Toggle aria-controls="offcanvasNavbar" />
//          <Navbar.Offcanvas
//            id="offcanvasNavbar"
//            aria-labelledby="offcanvasNavbarLabel"
//            placement="end"
//          >
//            <Offcanvas.Header closeButton>
//              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
//            </Offcanvas.Header>
//            <Offcanvas.Body>
//              <Nav className="justify-content-end flex-grow-1 pe-3">
//                <Nav.Link href="#action1">Home</Nav.Link>
//                <Nav.Link href="#action2">Link</Nav.Link>
//                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
//                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//                  <NavDropdown.Divider />
//                  <NavDropdown.Item href="#action5">
//                    Something else here
//                  </NavDropdown.Item>
//                </NavDropdown>
//              </Nav>
//              <Form className="d-flex">
//                <FormControl
//                  type="search"
//                  placeholder="Search"
//                  className="me-2"
//                  aria-label="Search"
//                />
//                <Button variant="outline-success">Search</Button>
//              </Form>
//            </Offcanvas.Body>
//          </Navbar.Offcanvas>
//        </Container>
//      </Navbar>
