import '../styles/globals.css'
import Login from './login'

function MyApp({ Component, pageProps }) {
  return <>
  <Login/>
    <Component {...pageProps} /></>
}

export default MyApp
