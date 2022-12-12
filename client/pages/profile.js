import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UpdateProfile from '../components/UpdateProfile'

const profile = () => {
  return (
    <div>
      <Navbar/>
      <UpdateProfile />
      <Footer/>
    </div>
  )
}

export default profile
