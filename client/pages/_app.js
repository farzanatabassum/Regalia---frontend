import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  const [user,setUser]=useState({value:null})
  const [key,setKey]=useState(0)
  const router=useRouter()
  useEffect(()=>{
     const authtoken=localStorage.getItem("Token");
    if(authtoken){
      setUser({value:authtoken})
      setKey(Math.random())
    }
  },[router.query])
  return <>
  <Navbar key={key} user={user}/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
