import {
  Link,
  Outlet,
} from '@remix-run/react'
import postBannerCSS from '../styles/postBanner.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: postBannerCSS
    }
  ]
}

export default function App () {
  return (
      <main>
        <Outlet />
        <p/> 
        <Link to="/blog" className='btn' >Volver</Link>
        <p/>
      </main>
  )
}
