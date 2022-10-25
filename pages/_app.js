import '../styles/globals.css'
import Post from './product/[slug]'

function MyApp({ Component, pageProps }) {
  return <>
  <Post/>
  <Component {...pageProps} /></>
}

export default MyApp
