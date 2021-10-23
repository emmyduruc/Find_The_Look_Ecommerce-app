import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Link as LinkRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import GoogleLogin from 'react-google-login'
import Announcement from '../header/Announcement'
import Footer from '../footer/Footer'
import Navbar from '../header/Nav'
import Newsletter from './Newsletter'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  google: {
    display: 'flex',
    alignItems: 'flex-end',
  },
}))
type Response = {
  token: string
  user: { firstName: string; lastName: string; email: string; password: string }
}

const SignupPage = () => {
  const classes = useStyles()
  let history = useHistory()
  const responseGoogle = async (response: any) => {
    console.log(response.tokenId)
    const tokenId = response.tokenId
    const result = await axios.post<Response>('/google/login', {
      id_token: tokenId,
    })
    const token = result.data.token
    const userData = result.data.user
    console.log('result', result.data.token)
    localStorage.setItem('token', result.data.token)
    //  const jwtToken = result.data.token
    if (result.status === 200) {
      history.push('/')
      //for routing from google signup button to the home page(logged in)
    }
  }

  console.log('env', process.env.REACT_APP_GOOGLE_CLIENT_ID)
  return (
    <div>
      <Announcement />
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRouter to={'/login'}>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </LinkRouter>

                <GoogleLogin
                  className={classes.form}
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
                  buttonText="Login"
                  //if clients authentication is successful with google it will invoke the callback above and pass it a response from google which will contain the IDToken
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />

                <Link href="#" variant="body2">
                  Sign up with google
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default SignupPage
