import {
  Link,
  Outlet,
  useNavigate
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

// const navigate = useNavigate()
// const goBack = () => navigate(-1)


export default function App () {
  return (
      <main>
        <Outlet />
        <Link to="/blog" className='btn' >Volver</Link>
        {/* <a href="#" onClick={goBack}>Go Back</a> */}
      </main>
  )
}
