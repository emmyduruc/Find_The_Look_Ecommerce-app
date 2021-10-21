import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// import MenuIcon from '@material-ui/icons/Menu'
import TextField from '@material-ui/core/TextField'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PersonIcon from '@material-ui/icons/Person'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import {
  DropdownButton,
  Button,
  Dropdown,
  FormControl,
  InputGroup,
} from 'react-bootstrap'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PhoneIcon from '@material-ui/icons/Phone'
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import EmailIcon from '@material-ui/icons/Email'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  root_2: {
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       margin: theme.spacing(2, 18),
     },
  logo: {
    margin: theme.spacing(2, 18),
  },
  icons: {
    display: 'flex',

    margin: theme.spacing(4, 15),
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userIcon: {
    marginRight: '3rem',
    fontSize: '2rem',
  },
  cartIcon: {
    fontSize: '2rem',
  },
//   search: {
//     borderRadius: '20%',
//     width: '100%',
//   },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <div >
           <div className={classes.root}>
      <h1 className={classes.logo}>Header</h1>
      <div>
        <>
          <InputGroup>
            <FormControl aria-label="Text input with dropdown button" />

            <DropdownButton
              variant="outline-secondary"
              title="Categories"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Tops</Dropdown.Item>
              <Dropdown.Item href="#">Pants</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">To Shop</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </>
      </div>
      <div className={classes.icons}>
        <div>
          <PersonOutlineIcon className={classes.userIcon} />
        </div>
        <div>
          <ShoppingCartIcon className={classes.cartIcon} />
        </div>
      </div>
      </div>
      <div  className={classes.root_2}>
        <div>
          {' '}
          <DropdownButton
            id="dropdown-item-button"
            variant="outline-info"
            title="Home"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton
            id="dropdown-item-button"
            variant="outline-info"
            title="Pages"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton
            id="dropdown-item-button"
            variant="outline-info"
            title="User Account"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>{' '}
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton
            id="dropdown-item-button"
            variant="outline-info"
            title="Vendor Account"
          >
            {' '}
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton
            id="dropdown-item-button"
            variant="outline-info"
            title="Men"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>{' '}
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          {' '}
          <DropdownButton
            id="dropdown-item-button"
            variant="outline-info"
            title="Ladies"
          >
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      
    </div>
    
  )
}

export default Header
