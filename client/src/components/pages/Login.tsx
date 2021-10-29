import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link as LinkRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'

const BlogButton = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #f5fbfd;
    color: black;
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80)',
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    backgroundColor: 'black'
  },
}))

const Login = () => {
  const classes = useStyles()

  const handleLogout = () => {
    localStorage.removeItem('token')
  }
  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography component="h1" variant="h5">
              Welcome Back ....
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Button
                onClick={handleLogout}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Out
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <LinkRouter to={'/signup'}>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </LinkRouter>
                </Grid>
              </Grid>
              <Box mt={5}></Box>
            </form>
          </div>
        </Grid>
      </Grid>
      <div style={{ width: '50%', marginTop: '2rem' }}>
        <h3 style={{ fontStyle: 'bold', fontWeight: 600, fontSize: '2rem' }}>
          Your privacy is important to us.
        </h3>
        <p style={{ width: '50%', fontStyle: 'bold', fontSize: '18px' }}>
          We ensure the correct processing of your personal data in accordance
          with the preferences you have chosen.
        </p>
        <BlogButton>Read more</BlogButton>
        <div style={{ width: '50%', marginTop: '2rem' }}>
          <img src="https://media.istockphoto.com/photos/beauty-young-girl-outdoors-enjoying-nature-picture-id618553342?b=1&k=20&m=618553342&s=170667a&w=0&h=5xwOPsHhP3s8CdiG69_iuymGF8mTKTQ0G1cLvMsQNww=" />
          <h3
            style={{
              fontStyle: 'bold',
              fontWeight: 600,
              fontSize: '2rem',
              marginTop: '2rem',
            }}
          >
            Create your own experience.
          </h3>
          <p style={{ fontStyle: 'bold', fontWeight: 600, fontSize: '1rem' }}>
            Profiling
          </p>
          <p style={{ fontStyle: 'bold', fontSize: '18px' }}>
            For the preparation of individual and group studies, surveys,
            statistical analysis and market research regarding my preferences
            for FEEDTHELOOK and other brands, products and services of the
            FEEDTHELOOK Group for the purpose of offering personalized services
          </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Login
