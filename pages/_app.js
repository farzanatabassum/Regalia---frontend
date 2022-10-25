import '../styles/globals.css'
import Signup from './signup'

function MyApp({ Component, pageProps }) {
  return <>
  <Signup />
  <Component {...pageProps} />
  </>
}

export default MyApp
