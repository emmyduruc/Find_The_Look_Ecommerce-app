import React from 'react'
import Footer from '../footer/Footer'
import Nav from '../header/Nav'
import Announcement from '../header/Announcement'
import Login from '../pages/Login'

function LoginPage() {
  return (
    <div>
      <Announcement />
      <Nav />
      <Login/>
      <Footer />
    </div>
  )
}

export default LoginPage
